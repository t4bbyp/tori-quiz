import { Link } from "react-router";
import classes from "./home.module.css";
import Welcome from "../components/translated-modules/welcome";
import { useTranslation } from "react-i18next";
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

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
            <img src={icon1} />
            <h3>{t($ => $.buttons.takeTest)}</h3>
          </Link>
        </button>
        <button className={classes.menu_btn}>
          <Link to="/characters-list">
            <img src={icon3   } style={{transform: "scaleX(-1)"}}/>
            <h3>{t($ => $.buttons.characterList)}</h3>
          </Link>
        </button>
        <button className={classes.menu_btn}>
          <Link to={"/new"}>
            <img src={icon2} style={{transform: "scaleX(-1)"}} />
            <h3>{t($ => $.buttons.addNewCharacter)}</h3>
          </Link>
        </button>
        <button className={classes.menu_btn}>
          <Link to="/edit">
            <img src={icon4} />
            <h3>{t($ => $.buttons.editCharacter)}</h3>
          </Link>
        </button>
      </div>
    </>
  );
}
