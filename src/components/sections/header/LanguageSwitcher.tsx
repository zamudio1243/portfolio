import { Button } from '#/components/ui/button'
import { getLocale, locales, setLocale } from '@/paraglide/runtime.js'

const localeLabels: Record<string, string> = { es: 'ES', en: 'EN' }

export default function LanguageSwitcher() {
  const current = getLocale()
  const currentIndex = locales.indexOf(current)
  const next = locales[(currentIndex + 1) % locales.length]

  return (
    <Button
      size="icon"
      onClick={() => setLocale(next)}
      aria-label={`Switch to ${localeLabels[next] ?? next}`}
      title={`Switch to ${localeLabels[next] ?? next}`}
      variant="outline"
      className="border-outline-variant/40"
    >
      {localeLabels[current] ?? current}
    </Button>
  )
}
