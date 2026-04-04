import type { Project } from "#/data/interfaces/data"
import { Badge } from "@/components/ui/badge"
import { getProjectTitle, getProjectDescription } from "#/data/i18n-helpers"

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ProjectCard({ project }: { project: Project }) {
  const title = getProjectTitle(project.id)
  const description = getProjectDescription(project.id)

  return (
    <Card className="group relative mx-auto w-full max-w-sm pt-0 transition-transform duration-500 hover:-translate-y-1">
      <div className="absolute inset-0 z-30 aspect-video bg-foreground/15 transition-opacity duration-500 group-hover:opacity-0" />
      <img
        src={project.image}
        alt={title}
        className="relative z-20 aspect-video w-full object-cover grayscale-25 transition-all duration-500 group-hover:grayscale-0 "
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge className="bg-primary text-accent" key={tag}>{tag}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
