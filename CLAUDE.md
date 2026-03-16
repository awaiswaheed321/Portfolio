# CLAUDE.md — Portfolio Website

This file is the single source of truth for all development decisions on this project.
Read it fully at the start of every session before writing any code.

---

## Project Overview

Personal portfolio website for **Awais Waheed**, Senior Backend Engineer.
Full rewrite from React + Vite to **Next.js 14 (App Router) + Tailwind CSS**.
Deployed via **GitHub Actions to GitHub Pages** with a custom domain (CNAME).

Target audience: hiring managers, technical leads, and recruiters in the software engineering space.
The site should feel polished, confident, and technical — not flashy or gimmicky.

---

## Tech Stack

| Layer       | Choice                          |
|-------------|----------------------------------|
| Framework   | Next.js 14 (App Router)          |
| Styling     | Tailwind CSS                     |
| Animations  | Framer Motion (subtle, purposeful)|
| Font        | Geist (Next.js native, fast)     |
| Icons       | Lucide React                     |
| Deployment  | GitHub Pages (static export)     |

**Next.js config requirements:**
- `output: 'export'` in `next.config.js` (static site generation)
- `images: { unoptimized: true }` (required for static export)
- Build output goes to `out/` directory
- CNAME file must be copied into `out/` during build

---

## GitHub Actions Pipeline

The existing pipeline deploys to GitHub Pages on every push to `main`.
The workflow must be updated to:
- Run `npm run build` which outputs to `out/`
- Copy `CNAME` to `out/` before uploading artifact
- Upload `out/` instead of `dist/`
- Everything else (permissions, concurrency, deploy steps) stays the same

Never remove or restructure the GitHub Actions workflow — just update paths from `dist` to `out`.

---

## Content Source of Truth

All content lives in these files. Never hardcode content that conflicts with them:

- `data/experience.md` — work experience entries (most recent role included here)
- `data/profile.md` — bio, summary, personal details, skills
- `data/projects.md` — university and personal projects

If these files exist, read them and use their data verbatim.
If they don't exist yet, scaffold them as part of setup and populate from the existing site.

> Content should be extracted from the existing React/Vite components during migration.
> Do not invent or summarize content — copy it exactly.

---

## Design System

### Philosophy
Refined minimalism with strong typographic hierarchy. The design should feel like it was
crafted by an engineer who has taste — not over-designed, not under-designed.
One dominant accent color, generous whitespace, subtle depth.

### Color Palette

```css
/* Dark mode (default preference) */
--bg-primary: #0F1117       /* Near-black, slightly blue-tinted */
--bg-secondary: #1A1D27     /* Card/section backgrounds */
--bg-tertiary: #22263A      /* Hover states, subtle borders */
--text-primary: #F0F2F8     /* Near-white body text */
--text-secondary: #8B92A9   /* Muted labels, metadata */
--accent: #2DD4BF           /* Teal — primary accent */
--accent-hover: #14B8A6     /* Teal darker on hover */
--border: #2A2E3F           /* Subtle borders */

/* Light mode */
--bg-primary: #F8F9FC       /* Off-white, not pure white */
--bg-secondary: #FFFFFF     /* Cards */
--bg-tertiary: #EEF0F6      /* Hover states */
--text-primary: #0F1117     /* Near-black */
--text-secondary: #5A6072   /* Muted */
--accent: #0D9488           /* Teal, slightly darker for light bg contrast */
--accent-hover: #0F766E
--border: #E2E5EF
```

### Typography
- **Font**: Geist Sans (`next/font/google` or `next/font/local`)
- **Headings**: font-weight 600-700, tight tracking
- **Body**: font-weight 400, relaxed line-height (1.6-1.7)
- **Code/tech terms**: Geist Mono for inline code snippets

### Spacing
- Section padding: `py-20` (desktop), `py-12` (mobile)
- Max content width: `max-w-5xl mx-auto px-6`
- Card gap: `gap-6`

### Animations (Framer Motion)
- Fade + slide up on scroll entry for sections (`y: 20 -> 0, opacity: 0 -> 1`)
- Duration: 0.4s, ease: `easeOut`
- Stagger children: 0.1s delay between items
- Hover on cards: subtle `y: -2` lift + border color transition
- Mode toggle: smooth color transition via CSS `transition: background 0.3s`
- NO parallax, NO heavy scroll effects, NO auto-playing anything

---

## Site Sections (in order)

1. **Navbar** — name/logo left, nav links right, dark/light toggle, sticky + blur backdrop
2. **Hero** — name, title, location, short bio, CTA buttons (Download CV, GitHub, LinkedIn, Email)
3. **Experience** — timeline layout, expandable cards, company + role + dates + bullets
4. **Skills** — grouped by category (Languages, Frameworks, Cloud/Infra, Tools), badge style
5. **Projects** — card grid, each with title, description, tech stack tags, optional GitHub link
6. **Contact** — simple section with email + LinkedIn + GitHub links, no form needed
7. **Footer** — minimal, copyright, links

---

## Component Structure

```
app/
  layout.tsx          # Root layout, font, ThemeProvider
  page.tsx            # Assembles all sections
  globals.css         # Tailwind base + CSS variables

components/
  layout/
    Navbar.tsx
    Footer.tsx
  sections/
    Hero.tsx
    Experience.tsx
    Skills.tsx
    Projects.tsx
    Contact.tsx
  ui/
    ThemeToggle.tsx
    Badge.tsx
    Card.tsx
    SectionHeading.tsx

data/
  experience.md
  profile.md
  projects.md

public/
  profile.jpg         # Profile photo
  CNAME               # Custom domain — must not be deleted
```

---

## Theme Toggle

- Use `next-themes` library for dark/light mode
- Default to `dark` system preference, respect OS setting
- Toggle button in navbar — sun/moon icon from Lucide
- No flash of unstyled content (FOUC) — use `suppressHydrationWarning` on `<html>`
- Tailwind dark mode strategy: `class` (set in `tailwind.config.js`)

---

## DO NOTs

- Do NOT use `purple`, `violet`, or gradient-heavy hero backgrounds
- Do NOT add lorem ipsum or placeholder content anywhere
- Do NOT change the CNAME file or remove it from the build output
- Do NOT use `next/image` with remote URLs without adding domains to config
- Do NOT add a contact form — links only
- Do NOT add a blog section
- Do NOT use `pages/` router — App Router only
- Do NOT use inline styles — Tailwind classes only (except CSS variables in globals.css)
- Do NOT add Google Analytics or any tracking scripts
- Do NOT break the GitHub Actions pipeline — update it, never remove it
- Do NOT invent work experience, skills, or project details

---

## Build & Dev Commands

```bash
npm run dev       # Local dev server
npm run build     # Static export to out/
npm run lint      # ESLint
```

---

## Deployment Checklist (run before pushing to main)

- [ ] `npm run build` completes without errors
- [ ] `out/` directory exists and contains `index.html`
- [ ] `CNAME` file is present in `out/`
- [ ] Dark/light toggle works without FOUC
- [ ] Site is responsive at 375px, 768px, 1280px
- [ ] No console errors in production build
