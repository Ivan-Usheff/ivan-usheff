import { createContext } from "react";
import type {  ConfigType, LanguageConfigType, LanguageKeyType } from "../../../types";


type LanguageContextType = {
  language: LanguageKeyType;
  languages: LanguageConfigType[];
  config: ConfigType;
  setLanguage: (language: LanguageKeyType) => void;
};

export const LanguageContext =
  createContext<LanguageContextType | undefined>(
    undefined
  );

// export const AuthContext = createContext<LanguageType>({} as LanguageType)