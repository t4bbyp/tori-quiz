import { createContext, useState } from "react";

export const QuizContext = createContext();

export function QuizProvider({children}) {
    const [username, setUsername] = useState("");
    const [answers, setAnswers] = useState([]);

    function addAnswer(answer) {
        setAnswers((prev) => [...prev, answer]);
    }

    function restartQuiz() {
        setUsername("");
        setAnswers([]);
    }

    const ctxValue = {
        username,
        setUsername,
        answers,
        addAnswer,
        restartQuiz
    }

    return (
        <QuizContext value={ctxValue}>{children}</QuizContext>
    )
}