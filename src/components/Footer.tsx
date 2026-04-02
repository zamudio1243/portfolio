import { portfolioData } from '#/data/portfolio';
import { Github, Linkedin, Twitter } from 'lucide-react'


const iconMap: Record<string, React.ComponentType<{ size?: number; 'aria-hidden'?: boolean }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: Twitter,
}

export default function Footer() {
  const year = new Date().getFullYear()
  const { personal, socialLinks } = portfolioData

  return (
    <footer className="site-footer mt-20 px-4 pb-14 pt-10 text-(--sea-ink-soft)">
      <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">
          &copy; {year} {personal.name}. All rights reserved.
        </p>
        <p className="island-kicker m-0">Built with TanStack Start</p>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.platform]
          if (!Icon) return null
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="rounded-xl p-2 text--(sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink)"
            >
              <Icon size={24} aria-hidden />
            </a>
          )
        })}
      </div>
    </footer>
  )
}
