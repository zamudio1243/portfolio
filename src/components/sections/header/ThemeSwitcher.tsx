import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import * as m from '@/paraglide/messages.js'

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

const themeCycle: Record<ThemeMode, ThemeMode> = {
  light: 'system',
  system: 'dark',
  dark: 'light',
}

const themeMeta: Record<ThemeMode, { icon: React.ReactNode; labelFn: () => string }> = {
  light: { icon: <Sun className="h-3.5 w-3.5" />, labelFn: () => m.theme_light() },
  system: { icon: <Monitor className="h-3.5 w-3.5" />, labelFn: () => m.theme_auto() },
  dark: { icon: <Moon className="h-3.5 w-3.5" />, labelFn: () => m.theme_dark() },
}

export function PortfolioThemeSwitcher() {
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

  function cycleTheme() {
    const next = themeCycle[mode]
    setMode(next)
    applyThemeMode(next)
    window.localStorage.setItem('theme', next === 'system' ? 'auto' : next)
  }

  const current = themeMeta[mode]

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={current.labelFn()}
      title={current.labelFn()}
      className="inline-flex items-center justify-center rounded-full border border-border bg-secondary p-1.5 text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      {current.icon}
    </button>
  )
}
