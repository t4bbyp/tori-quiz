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
import { useTranslation } from "react-i18next";

export default function Results() {
  const { t } = useTranslation();
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
          artist: c.character_artist,

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
        <div aria-live="polite">
          {loading && <p>{t(($) => $.results.loading)}</p>}
        </div>

        {!loading && !error && (
          <>
            <p className={classes.intro}>
              {quizCtx.username}, {t(($) => $.results.yourDate)}
            </p>

            {topMatches[0] && (
              <div className={classes.first}>
                <h2>{topMatches[0].character.name}</h2>
                <small aria-label="artist: ">@{topMatches[0].character.artist}</small>
                <p>
                  {t(($) => $.results.compatibility)}{" "}
                  {Math.round(topMatches[0].score * 100)}%
                </p>
                <img
                  src={topMatches[0].character.img}
                  alt={topMatches[0].character.name}
                />
                <p className={classes.desc}>{topMatches[0].character.desc}</p>
              </div>
            )}

            <h3>{t(($) => $.results.second)}</h3>

            <div className={classes.runners}>
              {topMatches[1] && (
                <div className={classes.runner}>
                  <p className={classes.runnerName}>
                    {topMatches[1].character.name}
                  </p>
                  <p>
                    {t(($) => $.results.compatibility)}{" "}
                    {Math.round(topMatches[1].score * 100)}%
                  </p>
                  <img
                    src={topMatches[1].character.img}
                    alt={topMatches[1].character.name}
                  />
                </div>
              )}
              {topMatches[2] && (
                <div className={classes.runner}>
                  <p className={classes.runnerName}>
                    {topMatches[2].character.name}
                  </p>
                  <p>
                    {t(($) => $.results.compatibility)}{" "}
                    {Math.round(topMatches[2].score * 100)}%
                  </p>
                  <img
                    src={topMatches[2].character.img}
                    alt={topMatches[2].character.name}
                  />
                </div>
              )}
            </div>

            <button className={classes.reset} onClick={quizCtx.restartQuiz}>
              {t(($) => $.buttons.repeat)}
            </button>
          </>
        )}
      </div>
    </>
  );
}
