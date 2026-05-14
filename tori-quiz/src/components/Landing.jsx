import { useState, useContext } from "react";
import Quiz from "./Quiz";
import { QuizContext } from "../store/quizContex";

function Landing() {
  const [uname, setUname] = useState();
  const quizCtx = useContext(QuizContext);
  const [quizStart, setQuizStart] = useState(false);

  function startQuiz(e) {
    e.preventDefault();
    quizCtx.setUsername(uname);
    setQuizStart(true);
  }

  if (quizStart === true) {
    return <Quiz/>;
  }

  return (
    <div className="mybox">
      <h2>Hi!</h2>
      <p>Lorem ipsum dolor sit amet.</p>

      <input
        type="text"
        name="username"
        placeholder="your name"
        defaultValue=""
        onChange={(e) => setUname(e.target.value)}
      />
      <button onClick={startQuiz}>Start!</button>
    </div>
  );
}

export default Landing;
