import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../store/quizContex";
import Header from "./Header";
import classes from "./Results.module.css";
import { supabase } from "../utils/supabase";

export default function Results() {
  const quizCtx = useContext(QuizContext);
  const userTraits = {};
  const userMeta = {};

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      const { data, error } = await supabase.from("characters").select("");

      if (error) {
        console.error(error);
        return;
      }

      const formatted = data.map((c) => ({
        id: c.character_id,
        name: c.character_name,
        img: c.character_img,
        desc: c.character_desc,
        preferences: c.character_preferences,
        traits: c.character_traits,
      }));

      setCharacters(formatted);
      setLoading(false);
    }

    fetchCharacters();
  }, []);

  quizCtx.answers.forEach((answer) => {
    if (answer.tags) {
      for (const tag in answer.tags) {
        userTraits[tag] = (userTraits[tag] || 0) + answer.tags[tag];
      }
    }

    if (answer.meta) {
      for (const key in answer.meta) {
        userMeta[key] = answer.meta[key];
      }
    }
  });

  const characterScores = characters.map((character) => ({
    character,
    score: calculateScore(character, userMeta, userTraits),
  }));

  console.log(characterScores);
  console.log(userMeta);
  console.log(userTraits);

  characterScores.sort((a, b) => b.score - a.score);
  const topMatches = characterScores.slice(0, 3);

  return (
    <>
      <Header />
      <div className="mybox">
        {loading && <p>Cargando resultados...</p>}

        {!loading && !error && (
          <>
            <p className={classes.intro}>
              {quizCtx.username}, tu cita perfecta sería con...
            </p>

            {topMatches.map((match, index) => {
              const compatibility = Math.min(Math.round(match.score), 100);

              return (
                <div key={match.character.id}>
                  {index === 0 && <h3>Match principal!</h3>}

                  {index === 1 && <h3>tmbn conectarias con...</h3>}

                  {index === 2 && <h3>Y quizas...</h3>}

                  <h2>{match.character.name}</h2>

                  <p>Compatibilidad: {compatibility}%</p>

                  <img src={match.character.img} alt={match.character.name} />

                  <p>{match.character.desc}</p>
                </div>
              );
            })}

            <button className={classes.reset} onClick={quizCtx.restartQuiz}>
              Repetir
            </button>
          </>
        )}
      </div>
    </>
  );
}

function isGenderCompatible(userMeta, character) {
  const userGender = userMeta.gender;
  const userSexuality = userMeta.sexuality;

  const charGender = character.preferences.gender;
  const charSexuality = character.preferences.sexuality;

  const userLikesChara =
    userSexuality === "bi" ||
    (userSexuality === "hetero" && userGender !== charGender) ||
    (userSexuality === "homo" && userGender === charGender);

  const charaLikesUser =
    charSexuality === "bi" ||
    (charSexuality === "hetero" && charGender !== userGender) ||
    (charSexuality === "homo" && charGender === userGender);

  return userLikesChara && charaLikesUser;
}

function calculateScore(character, userMeta, userTraits) {
  let score = 0;

  //META

  if(!isGenderCompatible(userMeta, character)) {
    return -999;
  }

  if (userMeta.tipo === character.preferences.quiere_tipo) {
    score += 20;
  }

  if (userMeta.apego === character.preferences.quiere_apego) {
    score += 15;
  }

  if (userMeta.child === character.preferences.child) {
    score += 10;
  }

  if (userMeta.relacion === character.preferences.relacion) {
    score += 10;
  }

  //TRAITS

  for (const trait in userTraits) {
    const userValue = userTraits[trait];

    const characterValue = character.traits[trait] || 0;

    const difference = Math.abs(userValue - characterValue);

    const compatibility = 10 - difference;

    score += compatibility;
  }

  return score;
}
