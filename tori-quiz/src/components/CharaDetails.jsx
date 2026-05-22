import { useEffect, useState } from "react";
import classes from "./CharaDetails.module.css";

export default function CharaDetails({ pjId, onBack }) {
  const [pjName, setPjName] = useState("");
  const [pjID, setPjID] = useState("");
  const [pjImg, setPjImg] = useState("");
  const [pjDesc, setPjDesc] = useState("");
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchCharacter() {
      const { data, error } = await supabase
        .from("characters")
        .select("*")
        .eq("character_id", pjId)
        .single();

      if (error) {
        setError(error.message);
        return;
      }

      setPjName(data.character_name);
      setPjID(data.character_id);
      setPjImg(data.character_img);
      setPjDesc(data.character_desc);

      setAnswers(data.character_answers || []);
    }

    fetchCharacter();
  }, [pjId]);

  return (
    <>
      <div className={classes.container}>
        <h1>{pjName}</h1>
        <table className={classes.details}>
          <tbody>
            <tr className={classes.profile}>
              <td className={classes.pfp}>
                <img src={pjImg} alt={pjName} />
              </td>
              <td className={classes.desc}>{pjDesc}</td>
            </tr>

            <tr>
              <td colSpan={"2"} className={classes.tags}>
                <div className={classes.taglist}>
                  <span className={classes.tag_item}>Mujer</span>
                  <span className={classes.tag_item}>Hetero</span>
                  <span className={classes.tag_item}>Extrovertido</span>
                  <span className={classes.tag_item}>Romantico</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button className={classes.return} onClick={onBack}>
          <span className="material-symbols-outlined">arrow_circle_left</span>
        </button>
      </div>
    </>
  );
}
