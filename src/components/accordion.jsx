import { useState } from "react";
import classes from "./accordion.module.css";
export default function Accordion({title, content}) {
  const [activeBtn, setActiveBtn] = useState(false);
  return (
    <div className={classes.accordion}>
      <button
        className={`${classes.accordionBtn} ${activeBtn ? classes.active : undefined}`}
        onClick={() => setActiveBtn(!activeBtn)}
      >
        {title}
      </button>
      <div
        className={`${classes.panel} ${activeBtn ? classes.panelActive : undefined}`}
      >
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
    </div>
  );
}
