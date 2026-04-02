import type { PortfolioData } from "./interfaces/data";

export const skills = {
  NestJs: "NestJs",
  React: "React",
  TypeScript: "TypeScript",
} as const;

export type SkillName = (typeof skills)[keyof typeof skills];

export const portfolioData: PortfolioData = {
  personal: {
    name: "Your Name",
    role: "Full-Stack Developer",
    headline: "Hey, I'm Your Name",
    subtitle: "A developer who builds polished, performant web experiences.",
    bio: [
      "First paragraph about yourself and your background.",
      "Second paragraph about your interests and what drives you.",
    ],
    profileImage: "/profile.jpg",
    email: "hello@example.com",
    resumeUrl: "/resume.pdf",
    location: "Your City, Country",
  },
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/yourusername",
      label: "Go to GitHub profile",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      label: "Go to LinkedIn profile",
    },
    {
      platform: "X",
      url: "https://x.com/yourusername",
      label: "Follow on X",
    },
  ],
  skills: [
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "NestJs", category: "Backend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "PostgreSQL", category: "Backend" },
    { name: "Docker", category: "Tools" },
    { name: "Git", category: "Tools" },
    { name: "Figma", category: "Design" },
  ],
  skillHighlights: [
    {
      title: "Agile",
      description: "Experienced in sprint planning and iterative delivery.",
    },
    {
      title: "Leadership",
      description: "Led cross-functional teams on key product initiatives.",
    },
    {
      title: "Optimization",
      description:
        "Passionate about performance tuning and clean architecture.",
    },
  ],
  projects: [
    {
      title: "Project One",
      description:
        "A brief description of what this project does and why it matters.",
      image: "/projects/project-one.png",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      category: "Web App",
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/project-one",
    },
    {
      title: "Project Two",
      description: "Another project description goes here.",
      image: "/projects/project-two.png",
      tags: ["Node.js", "ExpressJs", "PostgreSQL"],
      category: "Web App",
    },
    {
      title: "Project Three",
      description: "Something about this third project.",
      image: "/projects/project-three.png",
      tags: ["NestJs", "TypeScript"],
      category: "CLI",
    },
  ],
  projectCategories: ["All", "Web App", "CLI", "Library"],
};
