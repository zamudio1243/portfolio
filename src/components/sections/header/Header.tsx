import { GitHubIcon, LinkedInIcon } from '#/components/sections/footer/icons'
import { getSocialLabel } from '#/data/i18n-helpers'
import { portfolioData } from '#/data/portfolio'
import { Button } from '@/components/ui/button'
import * as m from '@/paraglide/messages.js'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { PortfolioThemeSwitcher } from './ThemeSwitcher'

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
}

function useScrollDirection() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        const delta = y - lastY
        const atBottom =
          window.innerHeight + y >= document.documentElement.scrollHeight - 2
        if (Math.abs(delta) > 5) {
          setHidden(y > 80 && delta > 0 && !atBottom)
          lastY = y
        }
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return hidden
}

const navLinks = [
  { href: '#about', label: () => m.nav_about() },
  { href: '#case-studies', label: () => m.nav_case_studies() },
  { href: '#projects', label: () => m.nav_projects() },
  { href: '#certifications', label: () => m.nav_certifications() },
  { href: '#contact', label: () => m.nav_contact() },
]

export default function Header() {
  const { personal, socialLinks } = portfolioData
  const scrollHidden = useScrollDirection()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [menuOpen])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg transition-transform duration-300 ${scrollHidden && !menuOpen ? '-translate-y-full' : 'translate-y-0'
        }`}
    >
      <nav className="mx-auto flex w-full max-w-270 items-center gap-4 px-4 py-3 sm:py-4">
        {/* Logo */}
        <a
          href="#"
          className="shrink-0 text-lg font-bold tracking-tight text-foreground no-underline"
        >
        Héctor
        </a>

        {/* Desktop nav links — centered */}
        <div className="hidden flex-1 items-center justify-center gap-6 text-sm font-semibold md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label()}
            </a>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <PortfolioThemeSwitcher />
          <LanguageSwitcher />
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.platform]
            if (!Icon) return null
            return (
              <Button
                key={link.platform}
                variant="outline"
                size="icon-sm"
                className="rounded-full"
                asChild
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={getSocialLabel(link.platform)}
                >
                  <Icon className="h-4 w-4" />
                </a>
              </Button>
            )
          })}
          <Button size="sm" className="rounded-full" asChild>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </Button>
        </div>

        {/* Mobile right side — always visible */}
        <div className="ml-auto flex items-center gap-1.5 md:hidden">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.platform]
            if (!Icon) return null
            return (
              <Button
                key={link.platform}
                variant="outline"
                size="icon-sm"
                className="rounded-full"
                asChild
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={getSocialLabel(link.platform)}
                >
                  <Icon className="h-4 w-4" />
                </a>
              </Button>
            )
          })}
          <Button variant="secondary" size="sm" className="rounded-full" asChild>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            className="rounded-full"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      <div
        className={`overflow-hidden border-t border-border transition-all duration-300 md:hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 border-t-0 opacity-0'
          }`}
      >
        <div className="mx-auto max-w-270 px-4 pb-4">
          <div className="flex flex-col gap-3 py-3 text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label()}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t border-border pt-3">
            <PortfolioThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
