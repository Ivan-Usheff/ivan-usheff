import type {
  LanguageConfigType,
  LanguageType
} from "../../types";

const modules = import.meta.glob<LanguageConfigType>(
  "/src/config/languages/languages.*.json",
  {
    eager: true,
    import: "default"
  }
);

export const LANGUAGE_CONFIG = Object.values(modules).reduce(
  (acc, language) => {
    acc[language.code] = language;
    return acc;
  },
  {} as LanguageType
);