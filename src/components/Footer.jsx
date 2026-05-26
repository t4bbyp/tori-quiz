import { Link } from "react-router";
import classes from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p>tvbbyp — 2026</p>
      <Link to="./faq" className={classes.faq}>FAQ</Link>
    </footer>
  );
}
