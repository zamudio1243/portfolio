import { useEffect, useRef, useState } from 'react'
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

const themeOptions: { value: ThemeMode; icon: React.ReactNode; labelFn: () => string }[] = [
  { value: 'light', icon: <Sun className="h-3.5 w-3.5" />, labelFn: () => m.theme_light() },
  { value: 'system', icon: <Monitor className="h-3.5 w-3.5" />, labelFn: () => m.theme_auto() },
  { value: 'dark', icon: <Moon className="h-3.5 w-3.5" />, labelFn: () => m.theme_dark() },
]

export function PortfolioThemeSwitcher() {
  const [mode, setMode] = useState<ThemeMode>('system')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  function setTheme(next: ThemeMode) {
    setMode(next)
    applyThemeMode(next)
    window.localStorage.setItem('theme', next === 'system' ? 'auto' : next)
    setOpen(false)
  }

  const activeOption = themeOptions.find((o) => o.value === mode) ?? themeOptions[1]

  return (
    <div ref={ref} className="relative inline-flex items-center rounded-full border border-border bg-secondary shadow-sm">
      {open ? (
        <div className="inline-flex items-center gap-0.5 p-1" role="radiogroup" aria-label={m.theme_group_label()}>
          {themeOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={mode === opt.value}
              aria-label={opt.labelFn()}
              title={opt.labelFn()}
              onClick={() => setTheme(opt.value)}
              className={`rounded-full p-1.5 transition-colors ${mode === opt.value ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {opt.icon}
            </button>
          ))}
        </div>
      ) : (
        <button
          type="button"
          aria-label={activeOption.labelFn()}
          title={activeOption.labelFn()}
          onClick={() => setOpen(true)}
          className="rounded-full p-1.5 text-foreground transition-colors hover:text-foreground/80"
        >
          {activeOption.icon}
        </button>
      )}
    </div>
  )
}
