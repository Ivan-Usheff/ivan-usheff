import type { AboutType, ContactType, HeroType, ProjectType, SkillType } from ".";


export type ConfigType = {
  hero: HeroType;
  about: AboutType;
  skills: SkillType[];
  projects: ProjectType;
  contact: ContactType;
}