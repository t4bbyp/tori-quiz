import { useContext } from "react";
import { QuizContext } from "../store/quizContex";
import Header from "./Header";
import classes from "./Results.module.css";
import { resultados } from "../assets/resultados";

export default function AddNewCharacter() {
  const quizCtx = useContext(QuizContext);
  const charaMeta = {
    gender: "",
    sexuality: "",
    tipo: "",
    quiere_tipo: "",
    apego: "",
    quiere_apego: "",
    relacion: "",
    child: "",
  };
  const charaTraits = {
    adaptable: 0,
    afirmacion: 0,
    ambivertido: 0,
    ambiguo: 0,
    actos: 0,
    aventurero: 0,
    caotico: 0,
    casual: 0,
    contacto_fisico: 0,
    directo: 0,
    educado: 0,
    emocional: 0,
    empatico: 0,
    estricto: 0,
    expresivo: 0,
    extrovertido: 0,
    hater: 0,
    introvertido: 0,
    inteligente: 0,
    libido: 0,
    otro_lenguaje: 0,
    pinguino: 0,
    pragmatico: 0,
    procrastinador: 0,
    racional: 0,
    responsable: 0,
    resolutivo: 0,
    romantico: 0,
    sutil: 0,
  };

  quizCtx.answers.forEach((answer) => {
    if (answer.tags) {
      for (const tag in answer.tags) {
        charaTraits[tag] = (charaTraits[tag] || 0) + answer.tags[tag];
      }
    }

    if (answer.meta) {
      for (const key in answer.meta) {
        charaMeta[key] = answer.meta[key];
      }
    }
  });

  return (
    <>
      <Header />
      <div className="mybox">
        <p className={classes.intro}>
          Yippie, tu personaje se ha añadido :D
        </p>

        
          <div key={quizCtx.pjID}>
            <h3>{quizCtx.pjName}</h3>
            <img src={quizCtx.pjImg}/>
            <p>{quizCtx.pjDesc}</p>
          </div>

        <button className={classes.reset} onClick={quizCtx.restartQuiz}>
          Repetir
        </button>
      </div>
    </>
  );
}

