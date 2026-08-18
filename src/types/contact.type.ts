import type { LinkType } from "./utils";


export type ContactType = {
  message: string;
  links: LinkType[];
}

export type ContactPropType = ContactType & {
  ui:string
}