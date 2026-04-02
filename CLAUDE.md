# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start dev server on port 3000
pnpm build     # Production build
pnpm preview   # Preview production build
pnpm test      # Run tests with Vitest (single run)
```

Add shadcn components via:
```bash
pnpx shadcn@latest add <component>
```

## Architecture

This is a **TanStack Start** full-stack React 19 personal portfolio — a single-page application (SPA) with anchor-based navigation.

### SPA Structure

This is a single-page portfolio. There is only one route (`/`). Navigation uses anchor links (`#about`, `#projects`, `#contact`) — there are no additional route files.

The home page (`src/routes/index.tsx`) composes four section components in order:
- `Hero` → `About` → `Projects` → `Contact`

### Portfolio Data

All portfolio content lives in **`src/data.ts`**. Update the placeholder values there to customize the portfolio. Typed interfaces are defined in the same file (`PersonalInfo`, `Project`, `Skill`, etc.).

### Routing

Routes live in `src/routes/`. TanStack Router auto-generates `src/routeTree.gen.ts` — **never edit this file manually**.

- `src/routes/__root.tsx` — root layout (Header, Footer, Outlet)
- `src/routes/index.tsx` — the single portfolio page (`/`)
- `src/router.tsx` — router factory (`getRouter()`) with scroll restoration and intent preloading

### Components

- `src/components/Header.tsx` — sticky nav with anchor links and Download CV button
- `src/components/Footer.tsx` — copyright and social links (driven by `portfolioData.socialLinks`)
- `src/components/ThemeToggle.tsx` — light/dark/auto theme toggle
- `src/components/sections/` — one component per portfolio section (Hero, About, Projects, Contact). These are intentionally empty shells for the user to build out.

### Styling

Tailwind CSS v4 is configured entirely via `src/styles.css` (no `tailwind.config.*` file). Theme tokens use OKLch colors and CSS custom properties. shadcn/ui uses the `radix-nova` style variant with `neutral` base color.

Key custom CSS classes and variables:
- `.page-wrap` — max-width container (1080px, centered)
- `.island-shell` — glassmorphic bordered card
- `.island-kicker` — uppercase section label
- `.nav-link` — navigation link with animated underline
- `.display-title` — Fraunces serif font for headings
- `.rise-in` — fade-in entrance animation
- `--sea-ink`, `--lagoon`, `--kicker`, `--surface`, `--line` — key theme tokens

Fonts imported: Manrope (sans), Fraunces (via Google Fonts), Geist Variable.

### Path Aliases

Both `#/*` and `@/*` resolve to `./src/*`. shadcn aliases use `#/` prefix (e.g., `#/components/ui`, `#/lib/utils`).

### TypeScript

Strict mode enabled with `noUnusedLocals` and `noUnusedParameters` — unused imports/variables will cause type errors.

### Testing

Vitest with `@testing-library/react` and `jsdom`. No watch mode in the default `test` script — use `pnpx vitest` for watch mode during development.

### Scroll Offset

The sticky header is ~56-64px tall. Add `scroll-margin-top` to each section (or `scroll-padding-top` on `html`) to prevent anchor links from hiding content under the header.
