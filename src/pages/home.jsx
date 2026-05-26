import { Link } from "react-router";
import classes from "./home.module.css";
import Welcome from "../components/translated-modules/welcome";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <div className={classes.text_container}>
        <Welcome />
      </div>

      <div className={classes.menu}>
        <button className={classes.menu_btn}>
          <Link to="/quiz">
            <img src="https://placehold.co/200x200" />
            <h3>{t($ => $.buttons.takeTest)}</h3>
          </Link>
        </button>
        <button className={classes.menu_btn}>
          <Link to="/characters-list">
            <img src="https://placehold.co/200x200" />
            <h3>{t($ => $.buttons.characterList)}</h3>
          </Link>
        </button>
        <button className={classes.menu_btn}>
          <Link to="/new">
            <img src="https://placehold.co/200x200" />
            <h3>{t($ => $.buttons.addNewCharacter)}</h3>
          </Link>
        </button>
        <button className={classes.menu_btn}>
          <Link to="/edit">
            <img src="https://placehold.co/200x200" />
            <h3>{t($ => $.buttons.editCharacter)}</h3>
          </Link>
        </button>
      </div>
    </>
  );
}
