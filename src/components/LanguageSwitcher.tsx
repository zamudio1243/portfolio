import { getLocale, locales, setLocale } from '@/paraglide/runtime.js'

const localeLabels: Record<string, string> = { es: 'ES', en: 'EN' }

export default function LanguageSwitcher() {
  return (
    <div className="inline-flex items-center gap-0.5 rounded-full border border-border bg-secondary p-1 shadow-sm">
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => setLocale(locale)}
          className={`rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors ${
            locale === getLocale()
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {localeLabels[locale] ?? locale}
        </button>
      ))}
    </div>
  )
}
