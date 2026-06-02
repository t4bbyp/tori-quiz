import { useId, useState } from "react";
import classes from "./accordion.module.css";
export default function Accordion({title, content}) {
  const [activeBtn, setActiveBtn] = useState(false);
  const panelId = useId();

  return (
    <div className={classes.accordion}>
      <button
        className={`${classes.accordionBtn} ${activeBtn ? classes.active : ""}`}
        onClick={() => setActiveBtn(!activeBtn)}
        aria-expanded={activeBtn}
        aria-controls={panelId}
      >
        {title}
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={undefined}
        hidden={!activeBtn}
        className={`${classes.panel} ${activeBtn ? classes.panelActive : ""}`}
      >
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
    </div>
  );
}
