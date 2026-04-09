import { portfolioData } from "#/data/portfolio";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  getProjectTitle,
  getProjectDescription,
  getProjectChallenge,
  getProjectRole,
  getProjectResults,
} from "#/data/i18n-helpers";
import * as m from "@/paraglide/messages.js";

function CaseStudyCard({
  label,
  text,
  accent,
}: {
  label: string;
  text: string;
  accent: "primary" | "muted";
}) {
  const borderClass =
    accent === "primary" ? "border-l-primary" : "border-l-muted-foreground/40";

  return (
    <Card className={`border-l-4 ${borderClass}`}>
      <CardHeader>
        <CardTitle className="text-xs font-bold uppercase tracking-widest text-primary">
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}

export default function CaseStudies() {
  const featured = portfolioData.projects.filter((p) => p.featured);

  return (
    <section id="case-studies" className="bg-muted">
      <div className="mx-auto w-full max-w-270 px-4 py-20">
      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
        {m.case_study_kicker()}
      </p>
      <h2 className="text-4xl font-bold tracking-tight text-foreground mb-16">
        {m.case_study_heading()}
      </h2>

      <div className="space-y-24">
        {featured.map((project) => {
          const title = getProjectTitle(project.id);
          const description = getProjectDescription(project.id);
          const challenge = getProjectChallenge(project.id);
          const role = getProjectRole(project.id);
          const results = getProjectResults(project.id);

          return (
            <article
              key={project.id}
              className="grid gap-10 md:grid-cols-2 items-start"
            >
              {/* Left — Image + Tags */}
              <div>
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src={project.image}
                    alt={title}
                    className="aspect-video w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Right — Content */}
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {description}
                </p>

                <div className="space-y-4">
                  {challenge && (
                    <CaseStudyCard
                      label={m.case_study_challenge()}
                      text={challenge}
                      accent="primary"
                    />
                  )}
                  {role && (
                    <CaseStudyCard
                      label={m.case_study_role()}
                      text={role}
                      accent="muted"
                    />
                  )}
                  {results && (
                    <CaseStudyCard
                      label={m.case_study_results()}
                      text={results}
                      accent="primary"
                    />
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-12 text-center text-xs text-muted-foreground/60">
        {m.case_study_confidential()}
      </p>
      </div>
    </section>
  );
}
