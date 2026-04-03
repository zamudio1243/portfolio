import { createContext, useContext, useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'

type ThemeMode = 'light' | 'system' | 'dark'

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') return 'system'
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return 'system'
}

function applyThemeMode(mode: ThemeMode) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const resolved = mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode

  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(resolved)

  if (mode === 'system') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', mode)
  }

  document.documentElement.style.colorScheme = resolved
}

const ThemeContext = createContext<{
  mode: ThemeMode
  setTheme: (mode: ThemeMode) => void
}>({ mode: 'system', setTheme: () => {} })

function ThemeSwitcherRoot({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('system')

  useEffect(() => {
    const initial = getInitialMode()
    setMode(initial)
    applyThemeMode(initial)
  }, [])

  useEffect(() => {
    if (mode !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyThemeMode('system')
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [mode])

  function setTheme(next: ThemeMode) {
    setMode(next)
    applyThemeMode(next)
    window.localStorage.setItem('theme', next === 'system' ? 'auto' : next)
  }

  return (
    <ThemeContext value={{ mode, setTheme }}>
      <div className="inline-flex items-center gap-0.5 rounded-full border border-border bg-secondary p-1 shadow-sm" role="radiogroup" aria-label="Tema">
        {children}
      </div>
    </ThemeContext>
  )
}

function Option({ value, icon, label }: { value: ThemeMode; icon: React.ReactNode; label: string }) {
  const { mode, setTheme } = useContext(ThemeContext)
  const active = mode === value

  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      aria-label={label}
      title={label}
      onClick={() => setTheme(value)}
      className={`rounded-full p-1.5 transition-colors ${active ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
    >
      {icon}
    </button>
  )
}

const ThemeSwitcher = Object.assign(ThemeSwitcherRoot, { Option })

export default ThemeSwitcher

export function PortfolioThemeSwitcher() {
  return (
    <ThemeSwitcher>
      <ThemeSwitcher.Option value="light" icon={<Sun className="h-3.5 w-3.5" />} label="Claro" />
      <ThemeSwitcher.Option value="system" icon={<Monitor className="h-3.5 w-3.5" />} label="Automático" />
      <ThemeSwitcher.Option value="dark" icon={<Moon className="h-3.5 w-3.5" />} label="Oscuro" />
    </ThemeSwitcher>
  )
}
