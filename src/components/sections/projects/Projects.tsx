import { useState } from "react";
import { portfolioData } from "#/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "./ProjectCard";
import * as m from "@/paraglide/messages.js";
import { getCategoryLabel } from "#/data/i18n-helpers";

export default function Projects() {
  const { projects, skills, projectCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSkills, setActiveSkills] = useState<string[]>([]);

  const toggleSkill = (skillName: string) => {
    setActiveSkills((prev) =>
      prev.includes(skillName)
        ? prev.filter((s) => s !== skillName)
        : [...prev, skillName]
    );
  };

  const filtered = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSkills =
      activeSkills.length === 0 ||
      activeSkills.some((skill) => project.tags.includes(skill as never));
    return matchesCategory && matchesSkills;
  });

  return (
    <section id="projects" className="mx-auto w-full max-w-270 px-4 py-20">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between mb-12">
        <div className="shrink-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            {m.projects_kicker()}
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            {m.projects_heading()}
          </h2>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          {/* Skill chips */}
          <div className="flex flex-wrap gap-2 md:justify-end">
            {skills.map((skill) => (
              <Badge
                key={skill.name}
                variant={activeSkills.includes(skill.name) ? "default" : "outline"}
                className="cursor-pointer select-none transition-colors"
                onClick={() => toggleSkill(skill.name)}
              >
                {skill.name}
              </Badge>
            ))}
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${activeCategory === category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
              >
                {getCategoryLabel(category)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          {m.projects_empty()}
        </p>
      )}
    </section>
  );
}
