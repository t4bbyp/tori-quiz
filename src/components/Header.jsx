import { Link } from "react-router";
import classes from "./Header.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Header() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language; // "en" or "es"

  return (
    <header className={classes.header}>
      <div />
      <h1>
        <Link to="./">{t(($) => $.title)}</Link>
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
