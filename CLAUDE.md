# CLAUDE.md — Portfolio Website

This file is the single source of truth for all development decisions on this project.
Read it fully at the start of every session before writing any code.
All **visual** decisions live in `DESIGN.md` — read that before touching any UI.

---

## Project Overview

Personal portfolio website for **Awais Waheed**, Senior Backend Engineer.
**Next.js 16 (App Router) + Tailwind CSS**, statically exported and deployed
via **GitHub Actions to GitHub Pages** with a custom domain (CNAME → awaiswaheed.net).

Target audience: hiring managers, technical leads, and recruiters.
Design concept ("Observability"), palette, and motion rules: see `DESIGN.md`.
Light **and** dark mode, both first-class; OS preference respected, manual
toggle persisted in `localStorage.theme`.

---

## Tech Stack

| Layer      | Choice                                              |
|------------|------------------------------------------------------|
| Framework  | Next.js 16 (App Router, static export)               |
| Styling    | Tailwind CSS 3 + CSS variable tokens (`darkMode: 'class'`) |
| Theming    | Hand-rolled: pre-paint inline script + stateless `ThemeToggle` — **no next-themes** |
| Animations | Hand-rolled CSS + IntersectionObserver `Reveal` — **no animation library** |
| Fonts      | Bricolage Grotesque (display, `next/font/google`) + Geist Sans/Mono (`geist` package) |
| Icons      | Inline SVGs in `components/ui/Icons.tsx` — **no icon library** |
| Deployment | GitHub Pages (static export)                          |

Runtime dependencies are exactly: `next`, `react`, `react-dom`, `geist`.
Do not add UI kits, animation libraries, icon packages, or theme libraries.

**Next.js config requirements:**
- `output: 'export'` in `next.config.mjs`
- `images: { unoptimized: true }`
- Build output goes to `out/`
- CNAME is in `public/` (auto-copied) and the workflow also copies it explicitly

---

## GitHub Actions Pipeline

`.github/workflows/deploy.yaml` deploys to GitHub Pages on every push to `main`:
`npm ci` → `npm run build` (outputs `out/`) → copy `public/CNAME` into `out/` →
upload `out/` → deploy. Node 22.

Never remove or restructure the workflow. If the build changes, update paths
and versions only.

---

## Content Source of Truth

All content lives in these files. Never hardcode content that conflicts with them:

- `data/experience.md` — work experience entries
- `data/profile.md` — bio, summary, personal details, skills, education
- `data/projects.md` — work and personal projects

`lib/data.ts` mirrors these files as typed structures the components consume.
**Update the markdown and `lib/data.ts` together.**

> Do not invent or embellish content. The 7-Eleven pipeline is **not**
> "mission-critical" — it is the event stream powering analytics and
> debugging (owner's correction, June 2026). Do not reintroduce the phrase.

---

## Site Structure (in order)

1. **Navbar** — 2px spectrum strip on top; display-face wordmark; mono
   section links with IntersectionObserver scroll-spy (active = volt);
   Résumé button, theme toggle; fixed, gains blur/background only after
   scroll. No hamburger; on mobile only the Contact link survives.
2. **Hero** — status line, mono kicker, craft-statement headline with one
   gradient phrase, bio, CTAs, then the four-card metric board (uptime, peak msgs/day, stores, years — real numbers,
   one hue each). Blueprint grid texture. Throughput is never the headline.
3. **Experience** (`01`) — sticky-rail section; timeline with node dots;
   tech stack always visible per row; first role expanded, others behind
   an accessible Highlights toggle.
4. **Education** (`02`) — sticky-rail section; two cards side by side.
5. **Skills / Toolchain** (`03`) — sticky-rail section; bento mosaic of
   hue-tinted chip tiles.
6. **Projects / Selected Work** (`04`) — sticky-rail section; featured-card
   grid, palette cycling per card.
7. **Contact** (`05`) — centered finale panel (breaks the rail pattern),
   gradient statement, email link. No form (photo lives in the hero).
8. **Footer** — copyright and links, nothing else.

---

## Component Structure

```
app/
  layout.tsx          # Fonts, metadata, JSON-LD Person schema, skip link,
                      # theme+js pre-paint script (html has
                      # suppressHydrationWarning for it)
  page.tsx            # Sections, plain stack (main#main, skip-link target)
  not-found.tsx       # Styled 404 (GitHub Pages serves out/404.html)
  globals.css         # Both theme token sets, grid, pulse, reveal/rise, reduced-motion
  icon.svg            # Favicon (ECG blip brand glyph)

components/
  layout/Navbar.tsx   Footer.tsx
  sections/Hero.tsx   Experience.tsx  ExperienceItem.tsx  Education.tsx
           Skills.tsx Projects.tsx    Contact.tsx
  ui/Reveal.tsx       # IntersectionObserver scroll reveal
     Section.tsx      # Sticky-rail section shell (heading + ghost numeral)
     ThemeToggle.tsx  # Stateless, CSS-driven icon swap
     Icons.tsx        # All inline SVG icons

data/                 # Content source of truth (markdown)
lib/data.ts           # Typed mirror of data/*.md
public/               # CNAME, og.png, profile.jpg, resume PDF, robots, sitemap
```

---

## DO NOTs

- Do NOT add `next-themes` — theming is hand-rolled and hydration-safe
- Do NOT add animation/icon/UI libraries — CSS + inline SVG only
- Do NOT use gold/amber. Volt blue is the interaction color; iris/aqua/rose/ok are section identity hues (see DESIGN.md hue map)
- Do NOT use `text-white` on volt fills — use `text-ground` (theme-adaptive)
- Do NOT add icon-topped card grids; hairline rows + hue-tinted chips (Skills) and metric cards (hero) are the only card-like elements
- Do NOT use em-dashes in site copy — periods, commas, colons, or `·`
- Do NOT call the 7-Eleven pipeline "mission-critical"
- Do NOT lead the hero with throughput numbers
- Do NOT add lorem ipsum or placeholder content anywhere
- Do NOT change or delete the CNAME file
- Do NOT replace `public/og.png` with a permanent `opengraph-image.tsx`
  (GitHub Pages serves it with the wrong MIME type — see DESIGN.md to regenerate)
- Do NOT add a contact form — links only
- Do NOT add a blog section
- Do NOT use the `pages/` router — App Router only
- Do NOT add Google Analytics or any tracking scripts
- Do NOT break the GitHub Actions pipeline — update it, never remove it
- Do NOT invent work experience, skills, metrics, or project details
- Do NOT animate the hero h1/bio from `opacity: 0` — it destroys LCP (use `hero-rise-solid`)

---

## Build & Dev Commands

```bash
npm run dev       # Local dev server
npm run build     # Static export to out/
npm run lint      # ESLint (flat config — `next lint` no longer exists)
```

---

## Deployment Checklist (run before pushing to main)

- [ ] `npm run build` completes without errors
- [ ] `out/` contains `index.html`, `og.png`, `CNAME` (after workflow copy step)
- [ ] No horizontal overflow at 375px, 768px, 1440px (`scrollWidth` check)
- [ ] Both themes checked at those widths; toggle persists across reload
- [ ] Lighthouse ≥ 95 performance, 100 a11y/best-practices/SEO (gzip server)
- [ ] No console errors (including hydration) in production build
- [ ] Reduced-motion: content visible instantly, spectrum strip and status dot static
