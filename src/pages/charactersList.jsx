import CharaList from "../components/CharaList";
import CharaDetails from "../components/CharaDetails";
import { useState } from "react";
import { CharactersProvider } from "../store/charactersContext";
export default function CharactersListPage() {
  const [selected, setSelected] = useState("");
  return (
    <CharactersProvider>
      {selected === "" && (
        <CharaList onSelect={(c) => setSelected(c.id)} />
      )}

      {selected && (
        <CharaDetails pjId={selected} onBack={() => setSelected("")} />
      )}

    </CharactersProvider>
  );
}
