import type { ConfigType } from "."

export const LANGUAGE_LABELS = {
  "es": "Español",
  "en": "English",
  // "dt": "Deutsche",
  // "it": "Italian"
} as const;

//! Deprecado
export type LanguageKeyLabelType = {
  'es': "Español",
  'en': "English",
  'dt': "Deutsche"
}

export type LanguageKeyType = keyof typeof LANGUAGE_LABELS;

export type LanguageConfigType = {
  code: Uppercase<LanguageKeyType>;
  label: typeof LANGUAGE_LABELS[LanguageKeyType];
  flag: string;
  content: ConfigType;
}


export type LanguageType = {
  [K in LanguageKeyType]?: LanguageConfigType
}

export type LanguageStateType = {
  current: LanguageKeyType;
}

export  type LanguageActionType = 
  | {
      type: "SET_LANGUAGE";
      payload: LanguageKeyType;
    };