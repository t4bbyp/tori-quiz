import { useEffect, useState } from "react";
import { questions } from "../assets/questions";
import classes from "./Editor.module.css";
import Input from "./Input";
import { supabase } from "../utils/supabase";
import { Form, useNavigate } from "react-router";

export default function Editor({ pjId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [pjName, setPjName] = useState("");
  const [pjID, setPjID] = useState("");
  const [pjImg, setPjImg] = useState("");
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
        character_desc: pjDesc,
        character_answers: answers,
      })
      .eq("character_id", pjId);

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    alert("Personaje actualizado!");
    navigate("/edit");
  }

  function selectAnswer(questionId, answerId) {
    setAnswers((prev) => {
      const filtered = prev.filter((a) => a.questionId !== questionId);

      return [
        ...filtered,
        {
          questionId,
          answerId,
        },
      ];
    });
  }

  return (
    <>
      {loading && (
        <div className={classes.mybox2}>
          <p>El personaje se esta actualizando...</p>
        </div>
      )}

      {!loading && error && (
        <div className={classes.mybox2}>
          <p>Ha ocurrido un error al guardar. Intentelo de nuevo.</p>
        </div>
      )}
      
      <Form onSubmit={handleEdit} method="post">
        <div className={classes.mybox2}>
          <Input
            type="text"
            name="id"
            placeholder="ID unico*"
            value={pjID || ""}
            onChange={(e) => setPjID(e.target.value)}
            className="id"
            extra={
              <small>
                * Un identificador simple, unico (ej. primer nombre). Solo
                letras latinas, minusculas. Aseguraos de no haber usado el mismo
                para otro pj. Si hace falta, preguntad a Tori.
              </small>
            }
          />

          <Input
            type="text"
            name="name"
            placeholder="nombre del personaje"
            value={pjName || ""}
            onChange={(e) => setPjName(e.target.value)}
          />

          <Input
            type="url"
            name="img"
            placeholder="link para la imagen del personaje"
            value={pjImg || ""}
            onChange={(e) => setPjImg(e.target.value)}
          />

          <textarea
            name="desc"
            placeholder="corta descripcion del personaje"
            value={pjDesc || ""}
            onChange={(e) => setPjDesc(e.target.value)}
          />
        </div>

        {questions.map((q) => {
          const selectedAnswer = answers.find((ans) => ans.questionId === q.id);

          return (
            <div className={classes.mybox2} key={q.id}>
              <h3>{q.question}</h3>
              {q.answers.map((a) => {
                const isSelected = selectedAnswer?.answerId === a.id;
                return (
                  <li key={a.id}>
                    <button
                      type="button"
                      onClick={() => selectAnswer(q.id, a.id)}
                      className={`${classes.answer} ${isSelected ? classes.selected : ""}`}
                    >
                      {a.text}
                    </button>
                  </li>
                );
              })}
            </div>
          );
        })}

        <button type="submit" className={classes.save} disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </Form>
    </>
  );
}
