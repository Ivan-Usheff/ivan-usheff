
export type SkillLevelType = 'Beginner' | 'Intermediate' | 'Advanced';

export type SkillType = {
  name: string;
  level?: SkillLevelType;
  experience?: number;
};

export type SkillPropsType = {
  skills: SkillType[];
  ui: string;
}