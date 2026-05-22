import { Link } from "react-router";
import Header from "../components/Header";
import classes from './start.module.css';

export default function StartPage() {
  return (
    <>
      <Header />
      <div className={classes.text_container}>
        <p>Hola!</p>
        <p>
          Bienvenido a <i>Romance en la Torre</i>, el lugar donde puedes
          descubrir qué personaje de{" "}
          <a href="https://scriptamanent.foroactivo.com/f2-la-cuarta-generacion">
            La Cuarta Generación
          </a> sería una pareja compatible contigo, o incluso con tu OC!
        </p>
      </div>

      <h2 className={classes.h2}>Que quieres hacer?</h2>

        <div className={classes.menu}>
            <button className={classes.menu_btn}>
                <Link to="/quiz">
                    <img src="https://placehold.co/200x200"/>
                    <h3>Haz el test</h3>
                </Link>
            </button>
            <button className={classes.menu_btn}>
                <Link to="/algo">
                    <img src="https://placehold.co/200x200"/>
                    <h3>Personajes disponibles</h3>
                </Link>
            </button>
            <button className={classes.menu_btn}>
                <Link to="/new">
                    <img src="https://placehold.co/200x200"/>
                    <h3>Añade un nuevo personaje</h3>
                </Link>
            </button>
            <button className={classes.menu_btn}>
                <Link to="/edit">
                    <img src="https://placehold.co/200x200"/>
                    <h3>Edita un personaje</h3>
                </Link>
            </button>
        </div>
    </>
  );
}
