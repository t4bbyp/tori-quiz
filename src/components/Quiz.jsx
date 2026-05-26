import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { questions } from "../assets/questions";
import { QuizContext } from "../store/quizContex";

import Results from "./Results";
import AddNewCharacter from "./AddNewCharacter";

import classes from "./Quiz.module.css";

function Quiz({ mode }) {
  const quizCtx = useContext(QuizContext);
  const { t } = useTranslation();

  const activeQuestionIndex = quizCtx.answers.length;
  const quizComplete = activeQuestionIndex === questions.length;

  if (quizComplete && mode === "user") {
    return <Results />;
  }

  if (quizComplete && mode === "new") {
    return <AddNewCharacter />;
  }

  const question = questions[activeQuestionIndex];

  function selectAnswer(answerId) {
    quizCtx.addAnswer(question.id, answerId);
  }

  return (
    <div className="mybox">
      <h2>{t(question.questionKey)}</h2>

      <ul>
        {question.answers.map((answer) => (
          <li key={answer.id}>
            <button onClick={() => selectAnswer(answer.id)}>
              {t(answer.textKey)}
            </button>
          </li>
        ))}
      </ul>

      <button className={classes.reset_btn} onClick={quizCtx.restartQuiz}>
        <span className="material-symbols-outlined">restart_alt</span>
      </button>
    </div>
  );
}

export default Quiz;
