import { useContext, useState } from "react";
import Landing from "./components/Landing";
import { QuizContext, QuizProvider } from "./store/quizContex";
import Quiz from "./components/Quiz";

function App() {
  const quizCtx = useContext(QuizContext);

  return (
    <>
      {quizCtx.username === "" && <Landing />}
      {quizCtx.username !== "" && <Quiz />}
    </>
  );


  //return <Res/>
}

export default App;
