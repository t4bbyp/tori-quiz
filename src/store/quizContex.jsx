import { createContext, useState } from "react";

export const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [username, setUsername] = useState("");

  const [pjName, setPjName] = useState("");
  const [pjID, setPjID] = useState("");
  const [pjImg, setPjImg] = useState("");
  const [pjDesc, setPjDesc] = useState("");
  const [pjArtist, setPjArtist] = useState("");

  const [answers, setAnswers] = useState([]);

  function addAnswer(questionId, answerId) {
    setAnswers((prev) => [
      ...prev,
      {
        questionId,
        answerId,
      },
    ]);
  }

  function restartQuiz() {
    setUsername("");
    setAnswers([]);
    setPjName("");
    setPjID("");
    setPjImg("");
    setPjDesc("");
    setPjArtist("");
  }

  const ctxValue = {
    username,
    setUsername,
    answers,
    addAnswer,
    restartQuiz,
    pjName,
    setPjName,
    pjID,
    setPjID,
    pjImg,
    setPjImg,
    pjDesc,
    setPjDesc,
    pjArtist,
    setPjArtist
  };

  return <QuizContext value={ctxValue}>{children}</QuizContext>;
}
