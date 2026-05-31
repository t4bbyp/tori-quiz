import { Link } from "react-router";
import classes from "./Header.module.css";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { QuizContext } from "../store/quizContex";


function Header() {
  const quizCtx = useContext(QuizContext);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <header className={classes.header}>
      <div />
      <h1>
        <Link onClick={quizCtx.restartQuiz} to="./">{t(($) => $.title)}</Link>
      </h1>
      <div className={classes.locales}>
        <button
          className={currentLang === "en" ? classes.active : undefined}
          onClick={() => i18n.changeLanguage("en")}
        >
          <span className="material-symbols-outlined">language_us</span>
        </button>
        <button
          className={currentLang === "es" ? classes.active : undefined}
          onClick={() => i18n.changeLanguage("es")}
        >
          <span className="material-symbols-outlined">language_spanish</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
