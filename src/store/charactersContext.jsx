import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { characterBuilder } from "../utils/characterBuilder";
import { toDimensions } from "../utils/personalities";
import { normalizeTo01 } from "../utils/calculations";
import { traitMax } from "../utils/extra";

const CharactersContext = createContext(null);

export function CharactersProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      const { data, error } = await supabase.from("characters").select("*");

      if (error) {
        setLoading(false);
        return;
      }

      const formatted = data.map((c) => {
        const built = characterBuilder(c.character_answers || []);
        const dimensions = toDimensions(normalizeTo01(built.traits, traitMax));
        return {
          id: c.character_id,
          name: c.character_name,
          img: c.character_img,
          desc: c.character_desc,
          artist: c.character_artist,
          answers: c.character_answers || [],
          preferences: built.preferences,
          rawTraits: built.traits,
          traits: dimensions,
          dimensions,
        };
      });

      setCharacters(formatted);
      setLoading(false);
    }

    fetchCharacters();
  }, []);

  return (
    <CharactersContext value={{ characters, loading }}>
      {children}
    </CharactersContext>
  );
}

export function useCharacters() {
  return useContext(CharactersContext);
}
