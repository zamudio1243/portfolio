import type { Category } from "./categories";
import type { SkillName } from "./skills";

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Skill {
  name: SkillName;
  category: Category;
}

export interface SkillHighlight {
  id: string;
}

export interface Project {
  id: string;
  image: string;
  tags: SkillName[];
  category: Category;
  featured?: boolean;
  liveUrl?: string;
  repoUrl?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  profileImage: string;
  email: string;
  resumeUrl: string;
  location?: string;
  siteUrl: string;
}

export interface Certification {
  id: string;
  issuer: string;
  image?: string;
  imageBg?: string;
  date?: string;
  expiresDate?: string;
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
