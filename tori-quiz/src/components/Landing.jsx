import { useState, useContext } from "react";
import Quiz from "./Quiz";
import { QuizContext } from "../store/quizContex";
import Header from "./Header";

function Landing() {
  const quizCtx = useContext(QuizContext);
  const [uname, setUname] = useState();
  const [quizStart, setQuizStart] = useState(false);

  function startQuiz(e) {
    e.preventDefault();
    quizCtx.setUsername(uname);
  }

  return (
    <>
      <Header />
      <div className="mybox">
        <h2>¡Bienvenid@!</h2>
        <p>Estas listo para descubrir tu pareja ideal en el mundo de L4G? :D</p>

        <input
          type="text"
          name="username"
          placeholder="tu  nombre"
          defaultValue=""
          onChange={(e) => setUname(e.target.value)}
        />
        <button className="start" onClick={startQuiz}>
          Empezar!
        </button>
      </div>
    </>
  );
}

export default Landing;
