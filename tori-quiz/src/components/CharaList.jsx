import { supabase } from "../utils/supabase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import classes from "./CharaList.module.css";

export default function CharaList({ onSelect }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      const { data, error } = await supabase
        .from("characters")
        .select("character_id, character_name, character_img");

      if (error) {
        console.error(error);
        return;
      }

      setCharacters(data);
      setLoading(false);
    }

    fetchCharacters();
  }, []);

  return (
    <>
      <div className={classes.container}>
        {characters.map((c) => (
          <button
            key={c.character_id}
            style={{ backgroundImage: `url(${c.character_img})` }}
            onClick={() => onSelect(c)}
            className={classes.item}
          >
            <h3>{c.character_name}</h3>
          </button>
        ))}
      </div>
    </>
  );
}
