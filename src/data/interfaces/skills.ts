export const skills = {
  NestJs: "NestJs",
  React: "React",
  TypeScript: "TypeScript",
  TailwindCSS: "Tailwind CSS",
  PostgreSQL: "PostgreSQL",
  Docker: "Docker",
  Git: "Git",
  Figma: "Figma",
  Nodejs: "Node.js",
  ExpressJs: "ExpressJs",
} as const;

export type SkillName = (typeof skills)[keyof typeof skills];
