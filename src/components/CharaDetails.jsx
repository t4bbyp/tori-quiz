import { useEffect, useState } from "react";
import classes from "./CharaDetails.module.css";
import buildCharacterTags from "../utils/buildCharaTags";
import { characterBuilder } from "../utils/characterBuilder";
import { toDimensions } from "../utils/personalities";
import { normalizeTo01 } from "../utils/calculations";
import { traitMax } from "../utils/extra";
import { useTranslation } from "react-i18next";

export default function CharaDetails({ pjId, onBack }) {
  const [loading, setLoading] = useState(true);
  const [pjName, setPjName] = useState("");
  const [pjImg, setPjImg] = useState("");
  const [pjDesc, setPjDesc] = useState("");
  const [answers, setAnswers] = useState([]);
  const [tags, setTags] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchCharacter() {
      setLoading(true);

      const { data, error } = await supabase
        .from("characters")
        .select("*")
        .eq("character_id", pjId)
        .single();

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      const built = characterBuilder(data.character_answers || []);

      const preferences = built.preferences;
      const rawTraits = built.traits;

      const dimensions = toDimensions(normalizeTo01(rawTraits, traitMax));

      const builtTags = buildCharacterTags(
        rawTraits,
        preferences,
        dimensions,
        t,
      );

      // SET EVERYTHING ONLY AFTER READY
      setPjName(data.character_name);
      setPjImg(data.character_img);
      setPjDesc(data.character_desc);
      setAnswers(data.character_answers || []);
      setTags(builtTags);

      setLoading(false);
    }

    fetchCharacter();
  }, [pjId, t]);

    if (loading) {
    return (
      <div className={classes.loader_container}>
        <div className={classes.loader}></div>
      </div>
    );
  }

  return (
    <>{!loading && 
      <div className={classes.container}>
        <h1 className={classes.chara_name}>{pjName}</h1>
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
                      <span
                        key={tag.label}
                        className={`${classes.tag_item} ${
                          classes[tag.category]
                        }`}
                      >
                        {tag.label}
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
      </div>}
    </>
  );
}
