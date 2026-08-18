import type { AboutType, ConfigUIType, ContactType, HeroType, ProjectType, SkillType } from ".";


export type ConfigType = {
  ui: ConfigUIType;
  hero: HeroType;
  about: AboutType;
  skills: SkillType[];
  projects: ProjectType;
  contact: ContactType;
}