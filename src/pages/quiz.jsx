import Landing from "../components/Landing";
import Quiz from "../components/Quiz";
import { QuizContext } from "../store/quizContex";
import { useContext } from "react";

export default function QuizPage() {
  const quizCtx = useContext(QuizContext);
  const mode = "user";
  
  return (
    <>
      {quizCtx.username === "" && <Landing mode={mode} />}
      {quizCtx.username !== "" && <Quiz mode={mode} />}
    </>
  );
}
