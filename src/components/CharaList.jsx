import { supabase } from "../utils/supabase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import classes from "./CharaList.module.css";
import Loader from "./Loader";

export default function CharaList({ onSelect }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      setLoading(true);
      const { data, error } = await supabase
        .from("characters")
        .select("character_id, character_name, character_img");

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setCharacters(data);
      setLoading(false);
    }

    fetchCharacters();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!loading && (
        <div className={classes.container} role="list">
          <div className={classes.innerContainer}>
            {characters.map((c) => (
              <button
                key={c.character_id}
                role="listitem"
                style={{ backgroundImage: `url(${c.character_img})` }}
                onClick={() => onSelect(c)}
                className={classes.item}
                aria-label={c.character_name}
              >
                <h3 aria-hidden="true">{c.character_name}</h3>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
