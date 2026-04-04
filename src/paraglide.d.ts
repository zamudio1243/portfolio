declare module "@/paraglide/messages.js" {
  type MessageFn = (inputs?: Record<string, string>, options?: { locale?: "es" | "en" }) => string;

  export const nav_about: MessageFn;
  export const nav_projects: MessageFn;
  export const nav_certifications: MessageFn;
  export const nav_contact: MessageFn;
  export const nav_download_cv: MessageFn;

  export const hero_kicker: MessageFn;
  export const hero_greeting: (inputs?: { name?: string }, options?: { locale?: "es" | "en" }) => string;
  export const hero_cta: MessageFn;
  export const hero_years_label: MessageFn;

  export const personal_role: MessageFn;
  export const personal_subtitle: MessageFn;

  export const about_kicker: MessageFn;
  export const about_heading: MessageFn;
  export const about_bio_1: MessageFn;
  export const about_bio_2: MessageFn;

  export const skill_highlight_aws_title: MessageFn;
  export const skill_highlight_aws_description: MessageFn;
  export const skill_highlight_fullstack_title: MessageFn;
  export const skill_highlight_fullstack_description: MessageFn;
  export const skill_highlight_ai_title: MessageFn;
  export const skill_highlight_ai_description: MessageFn;

  export const projects_kicker: MessageFn;
  export const projects_heading: MessageFn;
  export const projects_empty: MessageFn;
  export const category_all: MessageFn;
  export const category_web: MessageFn;
  export const category_backend: MessageFn;
  export const category_mobile: MessageFn;

  export const project_tms_title: MessageFn;
  export const project_tms_description: MessageFn;
  export const project_permergas_title: MessageFn;
  export const project_permergas_description: MessageFn;
  export const project_javer_title: MessageFn;
  export const project_javer_description: MessageFn;
  export const project_proximity_title: MessageFn;
  export const project_proximity_description: MessageFn;
  export const project_excelencia_title: MessageFn;
  export const project_excelencia_description: MessageFn;
  export const project_rendilitros_title: MessageFn;
  export const project_rendilitros_description: MessageFn;
  export const project_rrhh_title: MessageFn;
  export const project_rrhh_description: MessageFn;
  export const project_codisa_title: MessageFn;
  export const project_codisa_description: MessageFn;
  export const project_forprint_title: MessageFn;
  export const project_forprint_description: MessageFn;
  export const project_gmar_title: MessageFn;
  export const project_gmar_description: MessageFn;

  export const cert_kicker: MessageFn;
  export const cert_heading: MessageFn;
  export const cert_view: MessageFn;
  export const cert_expires: (inputs?: { date?: string }, options?: { locale?: "es" | "en" }) => string;
  export const cert_aws_title: MessageFn;
  export const cert_claude_title: MessageFn;
  export const cert_nextjs_title: MessageFn;

  export const contact_kicker: MessageFn;
  export const contact_heading: MessageFn;
  export const contact_description: MessageFn;
  export const contact_send_email: MessageFn;
  export const contact_email_label: MessageFn;
  export const contact_location_label: MessageFn;

  export const social_github_label: MessageFn;
  export const social_linkedin_label: MessageFn;

  export const footer_copyright: (inputs?: { year?: string; name?: string }, options?: { locale?: "es" | "en" }) => string;
  export const footer_built_with: MessageFn;

  export const theme_light: MessageFn;
  export const theme_auto: MessageFn;
  export const theme_dark: MessageFn;
  export const theme_group_label: MessageFn;
}

declare module "@/paraglide/runtime.js" {
  export function getLocale(): "es" | "en";
  export function setLocale(locale: "es" | "en"): void;
  export const locales: readonly ["es", "en"];
  export function localizeUrl(url: URL): URL;
  export function deLocalizeUrl(url: URL): URL;
}

declare module "@/paraglide/server.js" {
  export function paraglideMiddleware(
    request: Request,
    handler: () => Response | Promise<Response>,
  ): Promise<Response>;
}
