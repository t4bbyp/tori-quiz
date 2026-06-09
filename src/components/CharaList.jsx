import { useState, useMemo } from "react";
import { useCharacters } from "../store/charactersContext";
import Filters from "./filters/Filters";
import classes from "./CharaList.module.css";
import Loader from "./Loader";

export default function CharaList({ onSelect }) {
  const { characters, loading } = useCharacters();
  const [filters, setFilters] = useState({});

  const filtered = useMemo(() => {
    return characters.filter((c) => {
      for (const [key, values] of Object.entries(filters)) {
        if (values.length === 0) continue;
        if (!values.includes(c.preferences[key])) return false;
      }
      return true;
    });
  }, [characters, filters]);

  function handleClear() {
    setFilters({});
  }

  if (loading) return <Loader />;

  return (
    <>
      <Filters
        filters={filters}
        onChange={setFilters}
        onClear={handleClear}
      />
      <div className={classes.container} role="list">
        <div className={classes.innerContainer}>
          {filtered.map((c) => (
            <button
              key={c.id}
              role="listitem"
              style={{ backgroundImage: `url(${c.img})` }}
              onClick={() => onSelect(c)}
              className={classes.item}
              aria-label={c.name}
            >
              <h3 aria-hidden="true">{c.name}</h3>
            </button>
          ))}
          {filtered.length === 0 && (
            <p className={classes.empty}>
              No characters match the selected filters.
            </p>
          )}
        </div>
      </div>
    </>
  );
}