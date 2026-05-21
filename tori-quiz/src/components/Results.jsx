import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../store/quizContex";
import Header from "./Header";
import classes from "./Results.module.css";
import { supabase } from "../utils/supabase";
import { calculateScore, normalizeTo01 } from "../utils/calculations";
import { traitMax } from "../utils/extra";
import { toDimensions } from "../utils/personalities";

export default function Results() {
  const quizCtx = useContext(QuizContext);
  const userTraits = {};
  const userMeta = {};

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCharacters() {
      const { data, error } = await supabase.from("characters").select("");

      if (error) {
        setError(error.message);
        return;
      }

      const formatted = data.map((c) => {
        const parsedTraits =
          typeof c.character_traits === "string"
            ? JSON.parse(c.character_traits)
            : c.character_traits;

        const parsedPreferences =
          typeof c.character_preferences === "string"
            ? JSON.parse(c.character_preferences)
            : c.character_preferences;

        const normalizedCharacterTraits = normalizeTo01(parsedTraits, traitMax);

        return {
          id: c.character_id,
          name: c.character_name,
          img: c.character_img,
          desc: c.character_desc,
          preferences: parsedPreferences,
          traits: toDimensions(normalizedCharacterTraits),
        };
      });

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

  const normalizedUserTraits = normalizeTo01(userTraits, traitMax);
  const userDimensions = toDimensions(normalizedUserTraits);

  const characterScores = characters
    .map((character) => {
      const score = calculateScore(character, userMeta, userDimensions);

      console.log(character.name, score); // 👈 AQUÍ

      return {
        character,
        score,
      };
    })
    .filter((c) => c.score >= 0);

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
              const compatibility = Math.round(match.score * 100);

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
