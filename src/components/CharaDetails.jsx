import { useMemo } from "react";
import { useCharacters } from "../store/charactersContext";
import buildCharacterTags from "../utils/buildCharaTags";
import { calculateScore, normalizeTo01 } from "../utils/calculations";
import { getFullAnswers } from "../utils/getFullAnswers";
import { traitMax } from "../utils/extra";
import classes from "./CharaDetails.module.css";
import Loader from "./Loader";
import { useTranslation } from "react-i18next";

export default function CharaDetails({ pjId, onBack }) {
  const { characters, loading } = useCharacters();
  const { t } = useTranslation();

  const character = characters.find((c) => c.id === pjId);
  const others = characters.filter((c) => c.id !== pjId);

  const tags = useMemo(() => {
    if (!character) return [];
    return buildCharacterTags(character.rawTraits, character.preferences, character.dimensions, t);
  }, [character, t]);

  const topMatches = useMemo(() => {
    if (!character) return [];

    const charMeta = {};
    const charTraits = {};

    getFullAnswers(character.answers).forEach((answer) => {
      if (answer.tags) for (const tag in answer.tags) charTraits[tag] = (charTraits[tag] || 0) + answer.tags[tag];
      if (answer.meta) for (const key in answer.meta) charMeta[key] = answer.meta[key];
    });

    const charDimensions = character.dimensions;

    return others
      .map((c) => ({ character: c, score: calculateScore(c, charMeta, charDimensions) }))
      .filter((c) => c.score >= 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 2);
  }, [character, others]);

  if (loading || !character) return <Loader />;

  return (
    <div className={classes.details}>
      <div className={classes.container}>
        <h1 className={classes.chara_name}>{character.name}</h1>

        <div className={classes.profile}>
          <div className={classes.pfp}>
            <img src={character.img || "https://placehold.co/200x200"} alt={character.name} />
            {character.artist && <small>@{character.artist}</small>}
          </div>
          <p className={classes.desc}>{character.desc}</p>
        </div>

        {tags.length > 0 && (
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

      <div className={classes.container2}>
        <h2>{t(($) => $.charaDetails.compatible)}</h2>
        {topMatches.map(({ character: match }) => (
          <div key={match.id} className={classes.runner}>
            <p className={classes.runnerName}>{match.name}</p>
            <img src={match.img} alt={match.name} />
          </div>
        ))}
      </div>
    </div>
  );
}