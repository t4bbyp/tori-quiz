import { useState, useRef, useEffect } from "react";
import classes from "./Filters.module.css";
import { useTranslation } from "react-i18next";

const FILTER_CATEGORIES = [
  {
    key: "gender",
    labelKey: "filters.gender",
    options: [
      { value: "femenino", labelKey: "tags.gender.fem" },
      { value: "masculino", labelKey: "tags.gender.masc" },
      { value: "otro", labelKey: "tags.gender.other" },
    ],
  },
  {
    key: "sexuality",
    labelKey: "filters.sexuality",
    options: [
      { value: "hetero", labelKey: "tags.sexuality.hetero" },
      { value: "homo", labelKey: "tags.sexuality.homo" },
      { value: "bi", labelKey: "tags.sexuality.bi" },
      { value: "asexual", labelKey: "tags.sexuality.asex" },
    ],
  },
  {
    key: "apego",
    labelKey: "filters.attachment",
    options: [
      { value: "seguro", labelKey: "tags.attachment.seguro" },
      { value: "evitativo", labelKey: "tags.attachment.evitativo" },
      { value: "ansioso", labelKey: "tags.attachment.ansioso" },
      { value: "desorganizado", labelKey: "tags.attachment.desorganizado" },
      { value: "hater", labelKey: "tags.attachment.no" },
    ],
  },
  {
    key: "tipo",
    labelKey: "filters.type",
    options: [
      { value: "dom", labelKey: "Dom" },
      { value: "sub", labelKey: "Sub" },
      { value: "switch", labelKey: "Switch" },
    ],
  },
  {
    key: "social",
    labelKey: "Social",
    options: [
      { value: "intro", labelKey: "tags.social.intro" },
      { value: "extro", labelKey: "tags.social.extro" },
      { value: "ambi", labelKey: "tags.social.ambi" },
    ],
  },
];

export default function Filters({ filters, onChange, onClear }) {
  const { t } = useTranslation();
  const [openCategory, setOpenCategory] = useState(null);
  const panelRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpenCategory(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleCategory(key) {
    setOpenCategory((prev) => (prev === key ? null : key));
  }

  function handleCheck(categoryKey, value) {
    const current = filters[categoryKey] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onChange({ ...filters, [categoryKey]: updated });
  }

  const hasActiveFilters = Object.values(filters).some((v) => v.length > 0);

  return (
    <div className={classes.panel} ref={panelRef}>
      <div className={classes.row}>
        {FILTER_CATEGORIES.map((cat) => {
          const activeCount = (filters[cat.key] || []).length;
          const isOpen = openCategory === cat.key;

          return (
            <div key={cat.key} className={classes.dropdown}>
              <button
                className={`${classes.trigger} ${activeCount > 0 ? classes.active : ""}`}
                onClick={() => toggleCategory(cat.key)}
                aria-expanded={isOpen}
              >
                {t(($) => $[cat.labelKey])}
                {activeCount > 0 && (
                  <span className={classes.badge}>{activeCount}</span>
                )}
                <span className={classes.arrow}>{isOpen ? "▲" : "▼"}</span>
              </button>

              {isOpen && (
                <div className={classes.menu}>
                  {cat.options.map((opt) => {
                    const checked = (filters[cat.key] || []).includes(
                      opt.value,
                    );
                    return (
                      <label key={opt.value} className={classes.option}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleCheck(cat.key, opt.value)}
                        />
                        {t(($) => $[opt.labelKey])}
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {hasActiveFilters && (
          <button className={classes.clear} onClick={onClear}>
            {t(($) => $.filters.clear)}
          </button>
        )}
      </div>
    </div>
  );
}
