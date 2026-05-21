import { useState, useContext } from "react";
import Quiz from "./Quiz";
import { QuizContext } from "../store/quizContex";
import Header from "./Header";
import Input from "./Input";

function Landing({ mode }) {
  const quizCtx = useContext(QuizContext);
  const [uname, setUname] = useState();
  const [pjName, setPjName] = useState();
  const [pjID, setPjID] = useState();
  const [pjImg, setPjImg] = useState();
  const [pjDesc, setPjDesc] = useState();

  function startQuiz(e) {
    e.preventDefault();
    quizCtx.setUsername(uname);
  }

  function startAddNew(e) {
    e.preventDefault();
    quizCtx.setPjID(pjID);
    quizCtx.setPjName(pjName);
    quizCtx.setPjImg(pjImg);
    quizCtx.setPjDesc(pjDesc);
  }

  return (
    <>
      <Header />
      <div className="mybox">
        {mode === "user" ? (
          <>
            <h2>¡Bienvenid@!</h2>
            <p>
              Estas listo para descubrir tu pareja ideal en el mundo de L4G? :D
            </p>

            <Input
              type="text"
              name="username"
              placeholder="tu nombre"
              defaultValue=""
              onChange={(e) => setUname(e.target.value)}
            />
            <button className="start" onClick={startQuiz}>
              Empezar!
            </button>
          </>
        ) : (
          <>
            <h2>¿Quieres añadir un nuevo personaje?</h2>
            <p>
              Responde las siguientes preguntas desde la perspectiva del
              personaje que quieres añadir al test.
            </p>

            <Input
              type="text"
              name="id"
              placeholder="ID unico*"
              defaultValue=""
              onChange={(e) => setPjID(e.target.value)}
              className="id"
              extra="1"
            />

            <Input
              type="text"
              name="username"
              placeholder="tu nombre"
              defaultValue=""
              onChange={(e) => setPjName(e.target.value)}
            />

            <Input
              type="url"
              name="img"
              placeholder="link para imagen del pj"
              defaultValue=""
              onChange={(e) => setPjImg(e.target.value)}
            />

            <textarea
              type="text"
              name="desc"
              placeholder="texto corto que describa al pj"
              defaultValue=""
              onChange={(e) => setPjDesc(e.target.value)}
            />

            <button className="start" onClick={startAddNew}>
              Empezar!
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Landing;
