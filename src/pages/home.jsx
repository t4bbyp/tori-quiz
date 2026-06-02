import { Link } from "react-router";
import classes from "./home.module.css";
import Welcome from "../components/translated-modules/welcome";
import { useTranslation } from "react-i18next";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <div className={classes.text_container}>
        <Welcome />
      </div>
      <nav aria-label={t(($) => $.nav.mainMenu)} className={classes.menu}>
        <Link to="/quiz" className={classes.menu_btn}>
          <img src={icon1} alt="take the test image" aria-hidden="true" />
          <span>{t(($) => $.buttons.takeTest)}</span>
        </Link>
        <Link to="/characters-list" className={classes.menu_btn}>
          <img
            src={icon3}
            alt="characters list image"
            aria-hidden="true"
            style={{ transform: "scaleX(-1)" }}
          />
          <span>{t(($) => $.buttons.characterList)}</span>
        </Link>
        <Link to="/new" className={classes.menu_btn}>
          <img
            src={icon2}
            alt="add a new character image"
            aria-hidden="true"
            style={{ transform: "scaleX(-1)" }}
          />
          <span>{t(($) => $.buttons.addNewCharacter)}</span>
        </Link>
        <Link to="/edit" className={classes.menu_btn}>
          <img src={icon4} alt="change a character image" aria-hidden="true" />
          <span>{t(($) => $.buttons.editCharacter)}</span>
        </Link>
      </nav>
    </>
  );
}
