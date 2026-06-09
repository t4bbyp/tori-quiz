import { useEffect, useState } from "react";
import classes from "./CharaDetails.module.css";
import buildCharacterTags from "../utils/buildCharaTags";
import { characterBuilder } from "../utils/characterBuilder";
import { toDimensions } from "../utils/personalities";
import { traitMax } from "../utils/extra";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";
import { getFullAnswers } from "../utils/getFullAnswers";
import { calculateScore, normalizeTo01 } from "../utils/calculations";

export default function CharaDetails({ pjId, onBack }) {
  const [loading, setLoading] = useState(true);
  const [pjName, setPjName] = useState("");
  const [pjImg, setPjImg] = useState("");
  const [pjArtist, setPjArtist] = useState("");
  const [pjDesc, setPjDesc] = useState("");
  const [answers, setAnswers] = useState([]);
  const [tags, setTags] = useState([]);
  const { t } = useTranslation();

  const charTraits = {};
  const charMeta = {};
  const [characters, setCharacters] = useState([]);

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

  useEffect(() => {
    async function fetchCharacters() {
      const { data, error } = await supabase
        .from("characters")
        .select("")
        .neq("character_id", pjId);

      if (error) {
        setError(error.message);
        return;
      }

      const formatted = data.map((c) => {
        const built = characterBuilder(c.character_answers);

        return {
          id: c.character_id,
          name: c.character_name,
          img: c.character_img,
          desc: c.character_desc,
          artist: c.character_artist,

          preferences: built.preferences,
          traits: toDimensions(normalizeTo01(built.traits, traitMax)),
        };
      });

      setCharacters(formatted);
      setLoading(false);
    }

    fetchCharacters();
  }, []);

  const fullAnswers = getFullAnswers(answers);

  fullAnswers.forEach((answer) => {
    if (answer.tags) {
      for (const tag in answer.tags) {
        charTraits[tag] = (charTraits[tag] || 0) + answer.tags[tag];
      }
    }

    if (answer.meta) {
      for (const key in answer.meta) {
        charMeta[key] = answer.meta[key];
      }
    }
  });

  const normalizedCharTraits = normalizeTo01(charTraits, traitMax);
  const charDimensions = toDimensions(normalizedCharTraits);

  const characterScores = characters
    .map((character) => {
      const score = calculateScore(character, charMeta, charDimensions);

      console.log(character.name, score);

      return {
        character,
        score,
      };
    })
    .filter((c) => c.score >= 0);

  characterScores.sort((a, b) => b.score - a.score);
  const topMatches = characterScores.slice(0, 2);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!loading && (
        <div className={classes.details}>
          <div className={classes.container}>
            <h1 className={classes.chara_name}>{pjName}</h1>

            <div className={classes.profile}>
              <div className={classes.pfp}>
                <img
                  src={pjImg ? pjImg : "https://placehold.co/200x200"}
                  alt={pjName}
                />
                {pjArtist && <small>@{pjArtist}</small>}
              </div>
              <p className={classes.desc}>{pjDesc}</p>
            </div>

            {tags && (
              <div
                className={classes.taglist}
                aria-label="list of character tags"
              >
                {tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`${classes.tag_item} ${classes[tag.category]}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            )}

            <div className={classes.footer}>
              <button
                className={classes.return}
                onClick={onBack}
                aria-label="go back to characters list"
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_circle_left
                </span>
              </button>
            </div>
          </div>

          <div className={classes.container2}>
            <h2>{t(($) => $.charaDetails.compatible)}</h2>
            {topMatches[0] && (
              <div className={classes.runner}>
                <p className={classes.runnerName}>
                  {topMatches[0].character.name}
                </p>
                <img
                  src={topMatches[0].character.img}
                  alt={topMatches[0].character.name}
                />
              </div>
            )}
            {topMatches[1] && (
              <div className={classes.runner}>
                <p className={classes.runnerName}>
                  {topMatches[1].character.name}
                </p>
                <img
                  src={topMatches[1].character.img}
                  alt={topMatches[1].character.name}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
