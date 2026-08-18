import { useState } from "react";
import { useLanguage } from "../../utils";
import type { LanguageKeyType } from "../../types";

export const LanguageDropdown = () => {

  const {
    language,
    languages,
    setLanguage
  } = useLanguage();
  const [open, setOpen] = useState(false);

  const selectedLanguage = languages.find(
    item => item.code === language
  );

  return (

    <div className="language-select">

      <button
        type="button"
        className="language-select-button"
        onClick={() => setOpen(current => !current)}
      >
        {selectedLanguage && (
          <>
            <span
              className={`fi fi-${selectedLanguage.flag}`}
            />

            <span>
              {selectedLanguage.label}
            </span>

            <span>▼</span>
          </>
        )}
      </button>

      {open && (
        <div className="language-select-options">

          {languages.map(({ code, flag, label }) => (
            <button
              key={code}
              type="button"
              className="language-select-option"
              onClick={() => {
                setLanguage(code.toLocaleLowerCase() as LanguageKeyType);
                setOpen(false);
              }}
            >
              <span className={`fi fi-${flag}`} />

              <span>
                {label}
              </span>
            </button>
          ))}

        </div>
      )}

    </div>
  );
};