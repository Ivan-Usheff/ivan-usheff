import { useLanguage } from "../../utils";

export const LanguageDropdown = () => {

  const {
    language,
    languages,
    setLanguage
  } = useLanguage();

  return (
    <select
      value={language}
      onChange={(event) =>
        setLanguage( event.target.value as typeof language )
      }
      className="language-dropdown"
    >
      {languages.map(({ code, flag, label }) => (
          <option key={code} value={code} >
            {flag} {label}
          </option>
        )
      )}
    </select>
  );
};