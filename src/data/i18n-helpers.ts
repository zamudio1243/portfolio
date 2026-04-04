import * as m from "@/paraglide/messages.js";

// --- Skill Highlights ---

const skillHighlightTitles: Record<string, () => string> = {
  aws: m.skill_highlight_aws_title,
  fullstack: m.skill_highlight_fullstack_title,
  ai: m.skill_highlight_ai_title,
};

const skillHighlightDescriptions: Record<string, () => string> = {
  aws: m.skill_highlight_aws_description,
  fullstack: m.skill_highlight_fullstack_description,
  ai: m.skill_highlight_ai_description,
};

export function getSkillHighlightTitle(id: string): string {
  return skillHighlightTitles[id]?.() ?? id;
}

export function getSkillHighlightDescription(id: string): string {
  return skillHighlightDescriptions[id]?.() ?? "";
}

// --- Projects ---

const projectTitles: Record<string, () => string> = {
  tms: m.project_tms_title,
  permergas: m.project_permergas_title,
  javer: m.project_javer_title,
  proximity: m.project_proximity_title,
  excelencia: m.project_excelencia_title,
  rendilitros: m.project_rendilitros_title,
  rrhh: m.project_rrhh_title,
  codisa: m.project_codisa_title,
  forprint: m.project_forprint_title,
  gmar: m.project_gmar_title,
};

const projectDescriptions: Record<string, () => string> = {
  tms: m.project_tms_description,
  permergas: m.project_permergas_description,
  javer: m.project_javer_description,
  proximity: m.project_proximity_description,
  excelencia: m.project_excelencia_description,
  rendilitros: m.project_rendilitros_description,
  rrhh: m.project_rrhh_description,
  codisa: m.project_codisa_description,
  forprint: m.project_forprint_description,
  gmar: m.project_gmar_description,
};

export function getProjectTitle(id: string): string {
  return projectTitles[id]?.() ?? id;
}

export function getProjectDescription(id: string): string {
  return projectDescriptions[id]?.() ?? "";
}

// --- Certifications ---

const certificationTitles: Record<string, () => string> = {
  aws: m.cert_aws_title,
  claude: m.cert_claude_title,
  nextjs: m.cert_nextjs_title,
};

export function getCertificationTitle(id: string): string {
  return certificationTitles[id]?.() ?? id;
}

// --- Categories ---

const categoryLabels: Record<string, () => string> = {
  All: m.category_all,
  Web: m.category_web,
  Backend: m.category_backend,
  Mobile: m.category_mobile,
};

export function getCategoryLabel(category: string): string {
  return categoryLabels[category]?.() ?? category;
}

// --- Social Links ---

const socialLabels: Record<string, () => string> = {
  GitHub: m.social_github_label,
  LinkedIn: m.social_linkedin_label,
};

export function getSocialLabel(platform: string): string {
  return socialLabels[platform]?.() ?? platform;
}
