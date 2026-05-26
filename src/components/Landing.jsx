import { useState, useContext } from "react";
import Quiz from "./Quiz";
import { QuizContext } from "../store/quizContex";
import Header from "./Header";
import Input from "./Input";
import { supabase } from "../utils/supabase";
import { Form } from "react-router";
import { useTranslation } from "react-i18next";

function Landing({ mode }) {
  const {t} = useTranslation();
  const quizCtx = useContext(QuizContext);

  const [uname, setUname] = useState();

  const [pjName, setPjName] = useState();
  const [pjID, setPjID] = useState();
  const [pjImg, setPjImg] = useState();
  const [pjDesc, setPjDesc] = useState();

  const [error, setError] = useState("");

  function startQuiz(e) {
    e.preventDefault();
    quizCtx.setUsername(uname);
  }

  async function startAddNew(e) {
    e.preventDefault();

    setError("");

    const { data, error } = await supabase
      .from("characters")
      .select("character_id")
      .eq("character_id", pjID)
      .maybeSingle();

    if (error) {
      console.error(error);
      setError(t($ => $.errors.verifyID));
      return;
    }

    if (data) {
      setError(t($ => $.errors.existingID));
      return;
    }

    quizCtx.setPjID(pjID);
    quizCtx.setPjName(pjName);
    quizCtx.setPjImg(pjImg);
    quizCtx.setPjDesc(pjDesc);
  }

  return (
    <>
      <Form
        className="mybox"
        onSubmit={mode === "user" ? startQuiz : startAddNew}
      >
        {mode === "user" ? (
          <>
            <h2>{t($ => $.landing.welcome)}</h2>
            <p>
              {t($ => $.landing.description)}
            </p>

            <Input
              type="text"
              name="username"
              placeholder={t($ => $.landing.name)}
              defaultValue=""
              onChange={(e) => setUname(e.target.value)}
            />
            <button className="start">{t($ => $.buttons.start)}</button>
          </>
        ) : (
          <>
            <h2>{t($ => $.landing.newTitle)}</h2>
            <p>
              {t($ => $.landing.description2)}
            </p>

            <Input
              type="text"
              name="id"
              placeholder={t($ => $.editor.id)}
              defaultValue=""
              onChange={(e) => setPjID(e.target.value)}
              className="id"
              extra={
                <small>
                  {t($ => $.landing.idExplanation)}
                </small>
              }
            />

            <Input
              type="text"
              name="username"
              placeholder={t($ => $.landing.name)}
              defaultValue=""
              onChange={(e) => setPjName(e.target.value)}
            />

            <Input
              type="url"
              name="img"
              placeholder={t($ => $.landing.img)}
              defaultValue=""
              onChange={(e) => setPjImg(e.target.value)}
            />

            <textarea
              name="desc"
              placeholder={t($ => $.landing.desc)}
              defaultValue=""
              onChange={(e) => setPjDesc(e.target.value)}
            />

            {error && <p>{error}</p>}

            <button className="start">{t($ => $.buttons.start)}</button>
          </>
        )}
      </Form>
    </>
  );
}

export default Landing;
