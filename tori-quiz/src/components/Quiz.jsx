import { useContext, useState } from "react";
import { questions } from "../assets/questions";
import { QuizContext } from "../store/quizContex";
import Results from './Results';

function Quiz() {
  const quizCtx = useContext(QuizContext);
  const activeQuestionIndex = quizCtx.answers.length;

  const quizComplete = activeQuestionIndex === questions.length;

  if (quizComplete) {
    return <Results/>
  }

  const answers = [...questions[activeQuestionIndex].a];

  function selectAnswer(clickedAnswer) {
    console.log(clickedAnswer);
    quizCtx.addAnswer(clickedAnswer);
  }

  return (
    <div id="quiz">
      <h1>hey</h1>

      <h2>{questions[activeQuestionIndex].q}</h2>

      <ul>
        {answers.map((answer) => {
          return (
            <li key={answer.id}>
              <button onClick={() => selectAnswer(answer.id)}>{answer.text}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Quiz;
