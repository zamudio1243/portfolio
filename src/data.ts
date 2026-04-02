export interface SocialLink {
  platform: string
  url: string
  label: string
}

export interface Skill {
  name: string
  category: string
}

export interface SkillHighlight {
  title: string
  description: string
}

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  liveUrl?: string
  repoUrl?: string
}

export interface PersonalInfo {
  name: string
  role: string
  headline: string
  subtitle: string
  bio: string[]
  profileImage: string
  email: string
  resumeUrl: string
  location?: string
}

export interface PortfolioData {
  personal: PersonalInfo
  socialLinks: SocialLink[]
  skills: Skill[]
  skillHighlights: SkillHighlight[]
  projects: Project[]
  projectCategories: string[]
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Your Name',
    role: 'Full-Stack Developer',
    headline: "Hey, I'm Your Name",
    subtitle: 'A developer who builds polished, performant web experiences.',
    bio: [
      'First paragraph about yourself and your background.',
      'Second paragraph about your interests and what drives you.',
    ],
    profileImage: '/profile.jpg',
    email: 'hello@example.com',
    resumeUrl: '/resume.pdf',
    location: 'Your City, Country',
  },
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/yourusername',
      label: 'Go to GitHub profile',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      label: 'Go to LinkedIn profile',
    },
    {
      platform: 'X',
      url: 'https://x.com/yourusername',
      label: 'Follow on X',
    },
  ],
  skills: [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'PostgreSQL', category: 'Backend' },
    { name: 'Docker', category: 'Tools' },
    { name: 'Git', category: 'Tools' },
    { name: 'Figma', category: 'Design' },
  ],
  skillHighlights: [
    {
      title: 'Agile',
      description: 'Experienced in sprint planning and iterative delivery.',
    },
    {
      title: 'Leadership',
      description: 'Led cross-functional teams on key product initiatives.',
    },
    {
      title: 'Optimization',
      description: 'Passionate about performance tuning and clean architecture.',
    },
  ],
  projects: [
    {
      title: 'Project One',
      description: 'A brief description of what this project does and why it matters.',
      image: '/projects/project-one.png',
      tags: ['React', 'TypeScript', 'Tailwind'],
      category: 'Web App',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/yourusername/project-one',
    },
    {
      title: 'Project Two',
      description: 'Another project description goes here.',
      image: '/projects/project-two.png',
      tags: ['Node.js', 'Express', 'PostgreSQL'],
      category: 'Web App',
    },
    {
      title: 'Project Three',
      description: 'Something about this third project.',
      image: '/projects/project-three.png',
      tags: ['Python', 'FastAPI'],
      category: 'CLI',
    },
  ],
  projectCategories: ['All', 'Web App', 'CLI', 'Library'],
}
