import type { Category } from "./categories";
import type { SkillName } from "./skills";

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Skill {
  name: SkillName;
  category: Category;
}

export interface SkillHighlight {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: SkillName[];
  category: Category;
  liveUrl?: string;
  repoUrl?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  headline: string;
  subtitle: string;
  bio: string[];
  profileImage: string;
  email: string;
  resumeUrl: string;
  location?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  socialLinks: SocialLink[];
  skills: Skill[];
  skillHighlights: SkillHighlight[];
  projects: Project[];
  projectCategories: Category[];
  certifications: Certification[];
}
