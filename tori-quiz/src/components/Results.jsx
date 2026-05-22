import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../store/quizContex";
import Header from "./Header";
import classes from "./Results.module.css";
import { supabase } from "../utils/supabase";
import { calculateScore, normalizeTo01 } from "../utils/calculations";
import { traitMax } from "../utils/extra";
import { toDimensions } from "../utils/personalities";
import { characterBuilder } from "../utils/characterBuilder";
import { getFullAnswers } from "../utils/getFullAnswers";

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
        const built = characterBuilder(c.character_answers);

        return {
          id: c.character_id,
          name: c.character_name,
          img: c.character_img,
          desc: c.character_desc,

          preferences: built.preferences,
          traits: toDimensions(normalizeTo01(built.traits, traitMax)),
        };
      });

      setCharacters(formatted);
      setLoading(false);
    }

    fetchCharacters();
  }, []);

  const fullAnswers = getFullAnswers(quizCtx.answers);

  fullAnswers.forEach((answer) => {
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

      console.log(character.name, score);

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
