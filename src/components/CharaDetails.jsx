import { useEffect, useState } from "react";
import classes from "./CharaDetails.module.css";
import buildCharacterTags from "../utils/buildCharaTags";
import { characterBuilder } from "../utils/characterBuilder";
import { toDimensions } from "../utils/personalities";
import { normalizeTo01 } from "../utils/calculations";
import { traitMax } from "../utils/extra";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";

export default function CharaDetails({ pjId, onBack }) {
  const [loading, setLoading] = useState(true);
  const [pjName, setPjName] = useState("");
  const [pjImg, setPjImg] = useState("");
  const [pjArtist, setPjArtist] = useState("");
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

      setPjName(data.character_name);
      setPjImg(data.character_img);
      setPjArtist(data.character_artist);
      setPjDesc(data.character_desc);
      setAnswers(data.character_answers || []);
      setTags(builtTags);

      setLoading(false);
    }

    fetchCharacter();
  }, [pjId, t]);

  if (loading) {
    return <Loader />;
  }

  return (
  <>
    {!loading && (
      <div className={classes.container}>
        <h1 className={classes.chara_name}>{pjName}</h1>

        <div className={classes.profile}>
          <div className={classes.pfp}>
            <img src={pjImg ? pjImg : "https://placehold.co/200x200"} alt={pjName} />
            {pjArtist && <small>@{pjArtist}</small>}
          </div>
          <p className={classes.desc}>{pjDesc}</p>
        </div>

        {tags && (
          <div className={classes.taglist} aria-label="list of character tags">
            {tags.map((tag) => (
              <span key={tag.label} className={`${classes.tag_item} ${classes[tag.category]}`}>
                {tag.label}
              </span>
            ))}
          </div>
        )}

        <div className={classes.footer}>
          <button className={classes.return} onClick={onBack} aria-label="go back to characters list">
            <span className="material-symbols-outlined" aria-hidden="true">arrow_circle_left</span>
          </button>
        </div>
      </div>
    )}
  </>
);
}
