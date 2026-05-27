import { useEffect, useState } from "react";
import classes from "./CharaDetails.module.css";
import buildCharacterTags from "../utils/buildCharaTags";
import { characterBuilder } from "../utils/characterBuilder";
import { toDimensions } from "../utils/personalities";
import { normalizeTo01 } from "../utils/calculations";
import { traitMax } from "../utils/extra";
import {useTranslation} from 'react-i18next';

export default function CharaDetails({ pjId, onBack }) {
  const [pjName, setPjName] = useState("");
  const [pjImg, setPjImg] = useState("");
  const [pjDesc, setPjDesc] = useState("");
  const [answers, setAnswers] = useState([]);
  const [tags, setTags] = useState([]);
  const {t} = useTranslation();

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
      setPjImg(data.character_img);
      setPjDesc(data.character_desc);

      setAnswers(data.character_answers || []);
    }

    fetchCharacter();
  }, [pjId]);

  useEffect(() => {
    if (answers.length > 0) {
      const built = characterBuilder(answers);

      const preferences = built.preferences;
      const rawTraits = built.traits;

      const dimensions = toDimensions(normalizeTo01(rawTraits, traitMax));
      console.log("preferences: " + JSON.stringify(preferences));
      console.log("traits: " + JSON.stringify(rawTraits));
      const builtTags = buildCharacterTags(rawTraits, preferences, dimensions, t);
      console.log(builtTags);

      setTags(builtTags);
    }
  }, [answers, t]);

  return (
    <>
      <div className={classes.container}>
        <h1>{pjName}</h1>
        <table className={classes.details}>
          <tbody>
            <tr className={classes.profile}>
              <td className={classes.pfp}>
                {pjImg && <img src={pjImg} alt={pjName} />}
              </td>
              <td className={classes.desc}>{pjDesc}</td>
            </tr>

            <tr>
              <td colSpan={"2"} className={classes.tags}>
                {tags && (
                  <div className={classes.taglist}>
                    {tags.map((tag) => (
                      <span key={tag} className={classes.tag_item}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
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
