import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../store/quizContex";
import Header from "./Header";
import classes from "./Results.module.css";
import { supabase } from "../utils/supabase";

export default function AddNewCharacter() {
  const quizCtx = useContext(QuizContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function saveCharacter() {
      try {
        const newCharacter = {
          character_id: quizCtx.pjID,
          character_name: quizCtx.pjName,
          character_img: quizCtx.pjImg,
          character_desc: quizCtx.pjDesc,

          character_answers: quizCtx.answers,
        };

        const { error } = await supabase
          .from("characters")
          .insert([newCharacter]);

        if (error) {
          throw error;
        }
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
        {loading && <p>Guardando personaje...</p>}

        {!loading && !error && (
          <>
            <p className={classes.intro}>
              Yippie, tu personaje se ha añadido :D
            </p>

            <div key={quizCtx.pjID}>
              <h3>{quizCtx.pjName}</h3>
              <img src={quizCtx.pjImg} alt={quizCtx.pjName} />
              <p>{quizCtx.pjDesc}</p>
            </div>
          </>
        )}
        {error && <p>Error guardando personaje: {error}</p>}

        <button className={classes.reset} onClick={quizCtx.restartQuiz}>
          Repetir
        </button>
      </div>
    </>
  );
}
