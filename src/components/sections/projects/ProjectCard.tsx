
import type { Project } from "#/data/interfaces/data"
import { Badge } from "@/components/ui/badge"

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ProjectCard(project: Project) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-foreground/15" />
      <img
        src={project.image}
        alt={project.title}
        className="relative z-20 aspect-video w-full object-cover "
      />
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
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
