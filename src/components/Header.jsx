import { Link } from 'react-router';
import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <h1>
        <Link to="./">Romance en la Torre</Link>
        </h1>
    </header>
  );
}


export default Header;
