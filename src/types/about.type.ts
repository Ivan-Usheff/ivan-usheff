import type { LinkType } from "./utils";


export type AboutType = {
  description: string;
  image?: string;
  media?: LinkType[];
}

export type AboutPropsType = AboutType & {
  ui: string;
}