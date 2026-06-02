import { createPortal } from 'react-dom';
import classes from './Footer.module.css';

export default function Footer() {
  return createPortal(
    <footer className={classes.footer} aria-label="Site footer">
      <p>tvbbyp — 2026</p>
      <a href="#/faq">FAQ</a>
    </footer>,
    document.body
  );
}