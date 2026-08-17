import { useEffect, useReducer } from "react";

import { LanguageContext } from "./language.context";
import { languageReducer } from "./language.reducer";
import type { LanguageKeyType } from "../../../types";
import { LANGUAGE_CONFIG } from "../../../config/languages/languages.config";


type Props = {
  children: React.ReactNode;
};

const getInitialLanguage = (): LanguageKeyType => {
  const savedLanguage =
    localStorage.getItem("language");

  if (
    savedLanguage &&
    savedLanguage in LANGUAGE_CONFIG
  ) {
    return savedLanguage as LanguageKeyType;
  }

  return "es";
};

export const LanguageProvider = ({
  children
}: Props) => {

  const [state, dispatch] = useReducer(
    languageReducer,
    {
      current: getInitialLanguage()
    }
  );
  const config = LANGUAGE_CONFIG[state.current].content;
  const languages = Object.values(LANGUAGE_CONFIG);

  
  useEffect(() => {
    
    localStorage.setItem( "language", state.current );
    document.documentElement.lang = state.current;

  }, [state.current]);


  const setLanguage = (
    language: LanguageKeyType
  ) => {
    dispatch({
      type: "SET_LANGUAGE",
      payload: language
    });
  };


  return (
    <LanguageContext.Provider
      value={{
        language: state.current,
        languages,
        config, 
        setLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};