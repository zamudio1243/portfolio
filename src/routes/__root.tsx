import { TanStackDevtools } from '@tanstack/react-devtools'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import Footer from '../components/sections/footer/Footer'
import Header from '../components/sections/header/Header'

import { portfolioData } from '#/data/portfolio'
import * as m from '@/paraglide/messages.js'
import { baseLocale, getLocale, locales } from '@/paraglide/runtime.js'
import appCss from '../styles.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

const { personal, socialLinks } = portfolioData
const SITE_URL = personal.siteUrl.replace(/\/$/, '')
const localePath = (locale: string) => (locale === baseLocale ? '' : `/${locale}`)
const localeUrl = (locale: string) => `${SITE_URL}${localePath(locale)}`

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personal.name,
  jobTitle: personal.role,
  email: `mailto:${personal.email}`,
  url: SITE_URL,
  image: `${SITE_URL}${personal.profileImage}`,
  ...(personal.location ? { address: personal.location } : {}),
  sameAs: socialLinks.map((link) => link.url),
}

export const Route = createRootRoute({
  head: () => {
    const locale = getLocale()
    const canonical = localeUrl(locale)
    const ogImage = `${SITE_URL}${personal.profileImage}`
    const title = m.seo_title({ name: personal.name, role: personal.role })
    const description = m.seo_description()
    const ogAlt = m.seo_og_alt({ name: personal.name, role: personal.role })

    return {
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { title },
        { name: 'description', content: description },
        { name: 'keywords', content: m.seo_keywords() },
        { name: 'author', content: personal.name },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#0a0a0a' },
        // Open Graph
        { property: 'og:type', content: 'profile' },
        { property: 'og:site_name', content: personal.name },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: canonical },
        { property: 'og:locale', content: locale === 'es' ? 'es_ES' : 'en_US' },
        ...locales
          .filter((l) => l !== locale)
          .map((l) => ({
            property: 'og:locale:alternate',
            content: l === 'es' ? 'es_ES' : 'en_US',
          })),
        { property: 'og:image', content: ogImage },
        { property: 'og:image:alt', content: ogAlt },
        { property: 'profile:first_name', content: 'Héctor' },
        { property: 'profile:last_name', content: 'Zamudio' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: ogImage },
        { name: 'twitter:image:alt', content: ogAlt },
      ],
      links: [
        { rel: 'stylesheet', href: appCss },
        { rel: 'canonical', href: canonical },
        { rel: 'alternate', hrefLang: 'x-default', href: SITE_URL },
        ...locales.map((l) => ({
          rel: 'alternate',
          hrefLang: l,
          href: localeUrl(l),
        })),
      ],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(personJsonLd),
        },
      ],
    }
  },
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang={getLocale()} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="font-sans antialiased wrap-anywhere selection:bg-primary/25">
        <Header />
        {children}
        <Footer />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
