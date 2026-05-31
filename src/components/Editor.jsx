import { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, Form } from "react-router-dom";

import { questions } from "../assets/questions";
import { supabase } from "../utils/supabase";

import classes from "./Editor.module.css";
import Input from "./Input";

export default function Editor({ pjId }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [pjName, setPjName] = useState("");
  const [pjID, setPjID] = useState("");
  const [pjImg, setPjImg] = useState("");
  const [pjArtist, setPjArtist] = useState("");
  const [pjDesc, setPjDesc] = useState("");
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchCharacter() {
      const { data, error } = await supabase
        .from("characters")
        .select("*")
        .eq("character_id", pjId)
        .single();

      if (error) {
        setError(error.message);
        return;
      }

      setPjName(data.character_name);
      setPjID(data.character_id);
      setPjImg(data.character_img);
      setPjArtist(data.character_artist);
      setPjDesc(data.character_desc);
      setAnswers(data.character_answers || []);
    }

    fetchCharacter();
  }, [pjId]);

  async function handleEdit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase
      .from("characters")
      .update({
        character_name: pjName,
        character_id: pjID,
        character_img: pjImg,
        character_artist: pjArtist,
        character_desc: pjDesc,
        character_answers: answers,
      })
      .eq("character_id", pjId);

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    alert(t($ => $.editor.success));
    navigate("/edit");
  }

  function selectAnswer(questionId, answerId) {
    setAnswers((prev) => {
      const filtered = prev.filter((a) => a.questionId !== questionId);

      return [...filtered, { questionId, answerId }];
    });
  }

  return (
    <>
      {/* LOADING */}
      {loading && (
        <div className={classes.mybox2}>
          <p>{t($ => $.editor.saving)}</p>
        </div>
      )}

      {/* ERROR */}
      {!loading && error && (
        <div className={classes.mybox2}>
          <p>{t($ => $.errors.savingChara)}</p>
        </div>
      )}

      <Form onSubmit={handleEdit} method="post">
        <div className={classes.mybox2}>
          <Input
            type="text"
            name="id"
            placeholder={t($ => $.editor.id)}
            value={pjID || ""}
            onChange={(e) => setPjID(e.target.value)}
            extra={<small>{t($ => $.landing.idExplanation)}</small>}
          />

          <Input
            type="text"
            name="name"
            placeholder={t($ => $.landing.name)}
            value={pjName || ""}
            onChange={(e) => setPjName(e.target.value)}
          />

          <Input
            type="url"
            name="img"
            placeholder={t($ => $.landing.img)}
            value={pjImg || ""}
            onChange={(e) => setPjImg(e.target.value)}
          />

          <Input
            type="text"
            name="artist"
            placeholder={t($ => $.landing.artist)}
            value={pjArtist || ""}
            onChange={(e) => setPjArtist(e.target.value)}
          />

          <textarea
            name="desc"
            placeholder={t($ => $.landing.desc)}
            value={pjDesc || ""}
            onChange={(e) => setPjDesc(e.target.value)}
          />
        </div>

        {/* QUESTIONS */}
        {questions.map((q) => {
          const selectedAnswer = answers.find((ans) => ans.questionId === q.id);

          return (
            <div className={classes.mybox2} key={q.id}>
              <h3>{t(q.questionKey)}</h3>

              {q.answers.map((a) => {
                const isSelected = selectedAnswer?.answerId === a.id;

                return (
                  <li key={a.id}>
                    <button
                      type="button"
                      onClick={() => selectAnswer(q.id, a.id)}
                      className={`${classes.answer} ${
                        isSelected ? classes.selected : ""
                      }`}
                    >
                      {t(a.textKey)}
                    </button>
                  </li>
                );
              })}
            </div>
          );
        })}

        <button type="submit" className={classes.save} disabled={loading}>
          {loading ? t($ => $.loading) : t($ => $.buttons.save)}
        </button>
      </Form>
    </>
  );
}
