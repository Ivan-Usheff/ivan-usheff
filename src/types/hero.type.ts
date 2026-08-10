import type { LinkType } from "./utils";


export type HeroLinksType = LinkType;

export type HeroType = {
  name: string;
  lastName: string;
  role: string;
  description: string;
  image?: string;
  links: HeroLinksType[];
}