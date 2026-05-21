import { QuizContext } from "../store/quizContex";
import Landing from "../components/Landing";
import Quiz from "../components/Quiz";
import { useContext } from "react";

export default function NewCharacterPage() {
  const quizCtx = useContext(QuizContext);
  const mode = "new";
  console.log(quizCtx.pjName);
  
  return (
    <>
      {quizCtx.pjName === "" && <Landing mode={mode} />}
      {quizCtx.pjName !== "" && <Quiz mode={mode} />}
    </>
  );
}
