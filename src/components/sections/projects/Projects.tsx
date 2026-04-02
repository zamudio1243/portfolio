// import { portfolioData } from '#/data'
// Available: portfolioData.skills (tech badge chips),
//            portfolioData.projectCategories (filter buttons),
//            portfolioData.projects (cards: title, description, image, tags, category, liveUrl, repoUrl)

import type { PortfolioData, } from "#/data/interfaces/data";
import { ProjectCard } from "./ProjectCard";

type Props = Pick<PortfolioData, "projects" | "projectCategories" | "skills">;
export default function Projects({ projects }: Props) {
  return (
    <section id="projects" className="mx-auto w-full max-w-[1080px] px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => ProjectCard(project))}
      </div>
    </section>
  )
}
