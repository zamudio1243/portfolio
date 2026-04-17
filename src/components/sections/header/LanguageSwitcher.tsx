import { getLocale, locales, setLocale } from '@/paraglide/runtime.js'

const localeLabels: Record<string, string> = { es: 'ES', en: 'EN' }

export default function LanguageSwitcher() {
  const current = getLocale()
  const currentIndex = locales.indexOf(current)
  const next = locales[(currentIndex + 1) % locales.length]

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      aria-label={`Switch to ${localeLabels[next] ?? next}`}
      title={`Switch to ${localeLabels[next] ?? next}`}
      className="inline-flex items-center justify-center rounded-full border border-border bg-secondary px-2.5 py-1.5 text-xs font-semibold text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      {localeLabels[current] ?? current}
    </button>
  )
}
