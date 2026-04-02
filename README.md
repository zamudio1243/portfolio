# Portfolio

Personal portfolio built with [TanStack Start](https://tanstack.com/start) + React 19.

## Getting Started

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Build

```bash
pnpm build
pnpm preview    # preview production build locally
```

## Testing

```bash
pnpm test       # single run
pnpx vitest     # watch mode
```

## Customization

### Content
Edit **`src/data.ts`** to update all portfolio content: name, bio, projects, skills, social links, CV URL, etc.

### Sections
Section components live in `src/components/sections/`. Each file is an empty shell — build them out with your own layout and styles.

| File | Section |
|------|---------|
| `sections/Hero.tsx` | Full-screen intro with headline and CTA |
| `sections/About.tsx` | Bio, profile image, skill highlights |
| `sections/Projects.tsx` | Tech stack badges, project cards with filters |
| `sections/Contact.tsx` | Email and social links |

### Images
Add your profile photo and project screenshots to `public/`:
- `public/profile.jpg`
- `public/projects/project-name.png`
- `public/resume.pdf`

### Theme
Visual tokens (colors, shadows, fonts) are defined in `src/styles.css`. Key CSS custom properties:
- `--sea-ink` / `--sea-ink-soft` — primary text colors
- `--lagoon` / `--lagoon-deep` — accent teal
- `--kicker` — section label color
- `--surface` / `--surface-strong` — card backgrounds

### Adding shadcn components

```bash
pnpx shadcn@latest add <component>
```

## Project Structure

```
src/
  data.ts                  ← Update portfolio content here
  components/
    sections/              ← Build your section layouts here
      Hero.tsx
      About.tsx
      Projects.tsx
      Contact.tsx
    Header.tsx
    Footer.tsx
    ThemeToggle.tsx
  routes/
    __root.tsx             ← Root layout (header + footer)
    index.tsx              ← Single portfolio page
  styles.css               ← Theme tokens and global styles
  lib/utils.ts             ← cn() utility
```
