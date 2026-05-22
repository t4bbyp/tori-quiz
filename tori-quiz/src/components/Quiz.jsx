import { useContext, useState } from "react";
import { questions } from "../assets/questions";
import { QuizContext } from "../store/quizContex";
import Results from "./Results";
import classes from "./Quiz.module.css";
import Header from "./Header";
import AddNewCharacter from "./AddNewCharacter";

function Quiz({ mode }) {
  const quizCtx = useContext(QuizContext);
  const activeQuestionIndex = quizCtx.answers.length;
  const quizComplete = activeQuestionIndex === questions.length;

  if (quizComplete && mode === "user") {
    return <Results />;
  }

  if (quizComplete && mode === "new") {
    return <AddNewCharacter />;
  }

  const answers = [...questions[activeQuestionIndex].answers];

  function selectAnswer(answerId) {
    quizCtx.addAnswer(questions[activeQuestionIndex].id, answerId);
  }

  return (
    <>
      <div className="mybox">
        <h2>{questions[activeQuestionIndex].question}</h2>

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
