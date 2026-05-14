import { useContext } from "react";
import { QuizContext } from "../store/quizContex";

function Results() {
  const quizCtx = useContext(QuizContext);

  return (
    <>
      <h2>Finished!</h2>
      {quizCtx.answers ? <p>{quizCtx.username} lesgooo</p> : <p>nothing</p>}
    </>
  );
}

export default Results;