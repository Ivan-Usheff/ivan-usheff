import type { ConfigUIHeroType } from ".";
import type { LinkType } from "./utils";


export type HeroLinksType = LinkType;
export type HeroCVType = `${string}.pdf`;

export type HeroType = {
  name: string;
  lastName: string;
  role: string;
  description: string;
  cv?: HeroCVType;
  image?: string;
  links: HeroLinksType[];
}

export type HeroPropsType = HeroType & {
  ui: ConfigUIHeroType;
}