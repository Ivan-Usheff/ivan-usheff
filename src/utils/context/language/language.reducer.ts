import type { LanguageStateType, LanguageActionType } from "../../../types";


export const languageReducer = (
  state: LanguageStateType,
  action: LanguageActionType
): LanguageStateType => {
  switch (action.type) {

    case "SET_LANGUAGE":
      return {
        ...state,
        current: action.payload
      };

    default:
      return state;
  }
};