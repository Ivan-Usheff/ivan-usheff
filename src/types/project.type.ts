import type { LinkType } from "./utils";


export type ProjectPropsType = {
  type: "Backend" | "Frontend" | "Library" | "Mobile" | "Desktop" | "Proyecto Personal" | "Other";
  name: string;
  description: string;
  technologies: string[];
  links: LinkType[];
}

export type ProjectType = {
  description: string;
  projects: ProjectPropsType[];
}