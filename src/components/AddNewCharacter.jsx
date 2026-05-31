import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../store/quizContex";
import classes from "./Results.module.css";
import { supabase } from "../utils/supabase";
import {useTranslation} from 'react-i18next';

export default function AddNewCharacter() {
  const {t} = useTranslation();
  const quizCtx = useContext(QuizContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savedCharacter, setSavedCharacter] = useState(null);

  useEffect(() => {
    async function saveCharacter() {
      try {
        const newCharacter = {
          character_id: quizCtx.pjID,
          character_name: quizCtx.pjName,
          character_img: quizCtx.pjImg,
          character_artist: quizCtx.pjArtist,
          character_desc: quizCtx.pjDesc,
          character_answers: quizCtx.answers,
        };

        const { error } = await supabase
          .from("characters")
          .insert([newCharacter]);

        if (error) throw error;

        setSavedCharacter(newCharacter);
        quizCtx.restartQuiz();          
      } catch (err) {
        console.error(err);
        setError(err.message);
      }

      setLoading(false);
    }

    saveCharacter();
  }, []);

  return (
    <>
      <div className="mybox">
        {loading && <p>{t($ => $.newCharacter.saving)}</p>}

        {!loading && !error && savedCharacter && (
          <>
            <p className={classes.intro}>
              {t($ => $.newCharacter.success)}
            </p>
            <div>
              <h3>{savedCharacter.character_name}</h3>
              <img src={savedCharacter.character_img} alt={savedCharacter.character_name} />
              <small>@{savedCharacter.character_artist}</small>
              <p>{savedCharacter.character_desc}</p>
            </div>
          </>
        )}

        {error && <p>{t($ => $.errors.savingChara)} {error}</p>}

        <button className={classes.reset} onClick={quizCtx.restartQuiz}>
          {t($ => $.buttons.repeat)}
        </button>
      </div>
    </>
  );
}