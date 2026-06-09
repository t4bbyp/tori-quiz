import { useContext, useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import { questions } from "../assets/questions";
import { QuizContext } from "../store/quizContex";
import Results from "./Results";
import AddNewCharacter from "./AddNewCharacter";
import classes from "./Quiz.module.css";
import handleKeyDown from "../utils/accessibility";

function Quiz({ mode }) {
  const quizCtx = useContext(QuizContext);
  const { t } = useTranslation();

  const [focusedIndex, setFocusedIndex] = useState(0);

  const activeQuestionIndex = quizCtx.answers.length;
  const quizComplete = activeQuestionIndex === questions.length;


  useEffect(() => {
    setFocusedIndex(0);
  }, [activeQuestionIndex]);

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
      <h2 id="quiz-question">{t(question.questionKey)}</h2>

      <ul aria-labelledby="quiz-question">
        {question.answers.map((answer, index) => (
          <li key={answer.id}>
            <button
              onClick={() => selectAnswer(answer.id)}
              tabIndex={focusedIndex === index ? 0 : -1}
              onKeyDown={(e) =>
                handleKeyDown(
                  e,
                  question.answers,
                  index,
                  setFocusedIndex,
                  selectAnswer,
                )
              }
            >
              {t(answer.textKey)}
            </button>
          </li>
        ))}
      </ul>

      <button
        className={classes.reset_btn}
        onClick={quizCtx.restartQuiz}
        aria-label="restart"
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          restart_alt
        </span>
      </button>
    </div>
  );
}

export default Quiz;
