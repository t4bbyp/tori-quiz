import CharaList from "../components/CharaList";
import CharaDetails from "../components/CharaDetails";
import { useState } from "react";
import Header from "../components/Header";

export default function CharactersListPage() {
  const [selected, setSelected] = useState("");
  return (
    <>
      {selected === "" && (
        <CharaList onSelect={(c) => setSelected(c.character_id)} />
      )}

      {selected && (
        <CharaDetails pjId={selected} onBack={() => setSelected("")} />
      )}
    </>
  );
}
