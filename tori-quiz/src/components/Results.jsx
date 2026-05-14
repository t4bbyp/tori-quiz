import { useContext, useState } from "react";
import { QuizContext } from "../store/quizContex";
import Header from "./Header";
import classes from "./Results.module.css";
import { resultados } from "../assets/resultados";

function Results() {
  const quizCtx = useContext(QuizContext);
  const pj = quizCtx.answers.toString() === "a,a" ? "r1" : "r2";

  const selectedResult = resultados.find((resultado) => resultado.id === pj);

  return (
    <>
      <Header />
      <div className="mybox">
        <p className={classes.intro}>{quizCtx.username}, tu cita perfecta seria con...</p>
        <h2>{selectedResult.name}</h2>
        
        <img src={selectedResult.img}/>
        <p className={classes.desc}>{selectedResult.desc}</p>
        <button className={classes.reset} onClick={quizCtx.restartQuiz}>Repetir</button>
      </div>
    </>
  );
}

export default Results;
