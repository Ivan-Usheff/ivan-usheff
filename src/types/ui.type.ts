
export type ConfigUINavBarType = {
  about: string;
  skills: string;
  projects: string;
  contact: string;
  theme: string;
}

export type ConfigUIHeroType = {
  subtitle: string;
  viewProjects: string;
  downloadCV: string;
}
  
export type ConfigUISectionsType = {
  about: string;
  skills: string;
  projects: string;
  contact: string;
}

export type ConfigUIType = {
  navbar: ConfigUINavBarType;
  hero: ConfigUIHeroType;
  sections: ConfigUISectionsType;
}