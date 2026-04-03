import { portfolioData } from '#/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear()
  const { personal } = portfolioData

  return (
    <footer className="px-4 pb-14 pt-10 text-muted-foreground">
      <div className="mx-auto w-full max-w-270 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">
          &copy; {year} {personal.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">

          <p className="text-xs font-semibold uppercase tracking-widest m-0">Built with TanStack Start</p>
        </div>
      </div>
    </footer>
  )
}
