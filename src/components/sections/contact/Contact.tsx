import { portfolioData } from "#/data/portfolio";
import { getSocialLabel } from "#/data/i18n-helpers";
import * as m from "@/paraglide/messages.js";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export default function Contact() {
  const { personal, socialLinks } = portfolioData;

  return (
    <section id="contact" className="mx-auto w-full max-w-270 px-4 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
        {m.contact_kicker()}
      </p>

      <div className="grid gap-12 md:grid-cols-[1fr_auto_1fr] items-start">
        {/* Left — CTA */}
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            {m.contact_heading()}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
            {m.contact_description()}
          </p>

          <Button asChild size="lg" className="gap-2">
            <a href={`mailto:${personal.email}`}>
              <Send className="h-4 w-4" />
              {m.contact_send_email()}
            </a>
          </Button>
        </div>

        {/* Divider */}
        <Separator orientation="vertical" className="hidden md:block h-full" />

        {/* Right — Info cards */}
        <div className="space-y-6">
          {/* Email */}
          <a
            href={`mailto:${personal.email}`}
            className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {m.contact_email_label()}
              </p>
              <p className="text-sm font-semibold text-foreground">
                {personal.email}
              </p>
            </div>
          </a>

          {/* Location */}
          {personal.location && (
            <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {m.contact_location_label()}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {personal.location}
                </p>
              </div>
            </div>
          )}

          {/* Social links */}
          <div className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.platform];
              if (!Icon) return null;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={getSocialLabel(link.platform)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
