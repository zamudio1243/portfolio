import { portfolioData } from '#/data/portfolio'
import * as m from '@/paraglide/messages.js'
import LanguageSwitcher from './LanguageSwitcher'
import { PortfolioThemeSwitcher } from './ThemeSwitcher'

export default function Header() {
  const { personal } = portfolioData

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 px-4 backdrop-blur-lg">
      <nav className="mx-auto w-full max-w-270 flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
        <h2 className="m-0 shrink-0 text-base font-semibold tracking-tight">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-foreground no-underline shadow-sm sm:px-4 sm:py-2"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            {personal.name}
          </a>
        </h2>

        <div className="order-2 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-0 sm:w-auto sm:flex-nowrap sm:pb-0">
          <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
            {m.nav_about()}
          </a>
          <a href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
            {m.nav_projects()}
          </a>
          <a href="#certifications" className="text-foreground/70 hover:text-foreground transition-colors">
            {m.nav_certifications()}
          </a>
          <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
            {m.nav_contact()}
          </a>
        </div>

        <div className="flex items-center gap-1.5 sm:ml-auto sm:gap-2">
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm font-semibold text-foreground no-underline shadow-sm transition hover:-translate-y-0.5"
          >
            {m.nav_download_cv()}
          </a>
          <LanguageSwitcher />
          <PortfolioThemeSwitcher />
        </div>
      </nav>
    </header>
  )
}
