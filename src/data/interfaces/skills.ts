export const skills = {
  // Frontend
  React: "React",
  NextJs: "Next.js",
  VueJs: "Vue.js",
  NuxtJs: "Nuxt.js",
  TailwindCSS: "Tailwind CSS",

  // Backend
  NestJS: "NestJS",
  ExpressJs: "Express.js",
  Nodejs: "Node.js",
  NxDev: "Nx.dev",
  GraphQL: "GraphQL",
  Strapi: "Strapi",
  TsEd: "Ts.ED",

  // Mobile
  Flutter: "Flutter",
  JetpackCompose: "Jetpack Compose",

  // Database
  PostgreSQL: "PostgreSQL",
  MySQL: "MySQL",
  SQLServer: "SQL Server",

  // DevOps & Infrastructure
  Docker: "Docker",
  AWS: "AWS",
  Serverless: "Serverless",
  GitHubActions: "GitHub Actions",
  Git: "Git",

  // Languages & Tools
  TypeScript: "TypeScript",

  // AI & ML
  OpenAI: "OpenAI",
  LangChain: "LangChain",
} as const;

export type SkillName = (typeof skills)[keyof typeof skills];
