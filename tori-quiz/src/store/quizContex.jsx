import { createContext, useState } from "react";

export const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [username, setUsername] = useState("");

  const [pjName, setPjName] = useState("");
  const [pjID, setPjID] = useState("");
  const [pjImg, setPjImg] = useState("");
  const [pjDesc, setPjDesc] = useState("");

  const [answers, setAnswers] = useState([]);

  function addAnswer(answer) {
    setAnswers((prev) => [...prev, answer]);
  }

  function restartQuiz() {
    setUsername("");
    setAnswers([]);
    setPjName("");
    setPjID("");
    setPjImg("");
    setPjDesc("");
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
    setPjDesc
  };

  return <QuizContext value={ctxValue}>{children}</QuizContext>;
}
