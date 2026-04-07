import { ArrowRight } from "lucide-react";
import { portfolioData } from "#/data/portfolio";
import { getSocialLabel } from "#/data/i18n-helpers";
import { GitHubIcon, LinkedInIcon } from "#/components/sections/footer/icons";
import * as m from "@/paraglide/messages.js";

const CAREER_START_YEAR = 2021;

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export default function Hero() {
  const { personal, socialLinks } = portfolioData;
  const yearsExperience = new Date().getFullYear() - CAREER_START_YEAR;

  return (
    <section className="bg-card">
      <div className="relative mx-auto w-full max-w-270 overflow-hidden px-4 pt-32 pb-24">
        <div className="relative z-10 grid grid-cols-1 items-end gap-12 md:grid-cols-2">
          {/* Left column */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary">
              {m.hero_kicker()}
            </p>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tighter leading-[0.95] text-foreground md:text-7xl">
              {m.hero_greeting({ name: "" })}
              <span className="text-primary">{personal.name.split(" ")[0]}</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
              {m.personal_subtitle()}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {m.hero_cta()}
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="flex items-center gap-2">
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
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              {m.hero_availability()}
            </p>
          </div>

          {/* Right column — decorative years badge */}
          <div className="hidden select-none items-end justify-end md:flex">
            <div className="text-right">
              <p className="text-[10rem] font-extrabold leading-none tracking-tighter text-muted-foreground/20 lg:text-[14rem]">
                {yearsExperience}+
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground/30">
                {m.hero_years_label()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
