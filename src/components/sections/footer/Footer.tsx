import { portfolioData } from '#/data/portfolio';
import * as m from '@/paraglide/messages.js';

export default function Footer() {
  const year = new Date().getFullYear()
  const { personal } = portfolioData

  return (
    <footer className="px-4 pb-14 pt-10 text-muted-foreground">
      <div className="mx-auto w-full max-w-270 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">
          {m.footer_copyright({ year: String(year), name: personal.name })}
        </p>
        <div className="flex items-center gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest m-0">{m.footer_built_with()}</p>
        </div>
      </div>
    </footer>
  )
}
