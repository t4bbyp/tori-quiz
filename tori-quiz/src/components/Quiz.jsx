import { useContext, useState } from "react";
import { questions } from "../assets/questions";
import { QuizContext } from "../store/quizContex";
import Results from "./Results";
import classes from "./Quiz.module.css";
import Header from "./Header";

function Quiz() {
  const quizCtx = useContext(QuizContext);
  const activeQuestionIndex = quizCtx.answers.length;
  const quizComplete = activeQuestionIndex === questions.length;

  if (quizComplete) {
    return <Results />;
  }

  const answers = [...questions[activeQuestionIndex].a];

  function selectAnswer(clickedAnswer) {
    console.log(clickedAnswer);
    quizCtx.addAnswer(clickedAnswer);
  }

  return (
    <>
      <Header />
      <div className="mybox">
        <h2>{questions[activeQuestionIndex].q}</h2>

        <ul>
          {answers.map((answer) => {
            return (
              <li key={answer.id}>
                <button onClick={() => selectAnswer(answer.id)}>
                  {answer.text}
                </button>
              </li>
            );
          })}
        </ul>

        <button className={classes.reset_btn} onClick={quizCtx.restartQuiz}>
          <span className="material-symbols-outlined">restart_alt</span>
        </button>
      </div>
    </>
  );
}

export default Quiz;
