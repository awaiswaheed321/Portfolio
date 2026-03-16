# TASKS.md — Portfolio Build Task List

This file tracks every build task for the portfolio rewrite.
At the start of every Claude Code session, read this file and CLAUDE.md before doing anything.
After completing a task, mark it `[x]` and add a one-line note if anything important was decided.
Never skip ahead — complete tasks in order unless noted as parallelizable.

---

## How to use this file

- Each session starts with: "Read CLAUDE.md, DESIGN.md, and TASKS.md. Resume from the first unchecked task."
- Complete one task fully (including testing the build) before moving to the next.
- If a task is blocked, mark it `[~]` and note the blocker inline.
- Do not modify the task list structure — only update checkbox status and add inline notes.

---

## Phase 1 — Project Foundation

- [x] **1.1 — Initialize Next.js 14 project**
  - Run `npx create-next-app@14` with App Router, TypeScript, Tailwind, ESLint
  - Remove all boilerplate content from `app/page.tsx` and `app/globals.css`
  - Confirm `npm run dev` starts without errors
  - Note: initialized manually (dir name "Portfolio" blocked create-next-app); Next.js 14.2.35 installed.

- [x] **1.2 — Configure next.config.js for static export**
  - Set `output: 'export'`
  - Set `images: { unoptimized: true }`
  - Set `trailingSlash: true`
  - Confirm `npm run build` produces an `out/` directory with `index.html`
  - Note: uses `next.config.mjs`; build confirmed clean, `out/index.html` present.

- [x] **1.3 — Configure Tailwind with custom design tokens**
  - Extend `tailwind.config.js` with custom colors that map to CSS variables from DESIGN.md
  - Add `darkMode: 'class'`
  - Set up `globals.css` with all CSS variable definitions for light and dark mode
  - Add Geist font via `next/font/local`
  - Note: all DESIGN.md CSS variables in globals.css; Geist loaded via `geist` package.

- [x] **1.4 — Install and configure dependencies**
  - `framer-motion` — animations
  - `next-themes` — dark/light mode toggle
  - `lucide-react` — icons
  - Confirm all install cleanly with no peer dependency conflicts
  - Note: all 3 installed; only eslint@8 deprecation warnings (expected for Next.js 14, non-blocking).

- [x] **1.5 — Set up ThemeProvider**
  - Wrap app in `ThemeProvider` from `next-themes` in `app/layout.tsx`
  - Set `defaultTheme: 'dark'` and `enableSystem: true`
  - Add `suppressHydrationWarning` to `<html>` tag
  - Confirm no FOUC (flash of unstyled content) on page load

- [x] **1.6 — Update GitHub Actions workflow**
  - Update `.github/workflows/deploy.yml`
  - Change artifact upload path from `dist/` to `out/`
  - Add step to copy `CNAME` from `public/` to `out/` after build
  - Do not change any other part of the workflow
  - Note: Next.js auto-copies `public/` → `out/` so CNAME step is a safe redundant backup.

- [x] **1.7 — Scaffold component and data directory structure**
  - Create all empty component files as per CLAUDE.md component structure
  - Confirm `data/experience.md`, `data/profile.md`, `data/projects.md` exist and are populated
  - Confirm `public/CNAME` and `public/profile.jpg` exist

---

## Phase 2 — Layout Shell

- [x] **2.1 — Build Navbar component**
  - Sticky, blur backdrop, border appears on scroll
  - Name wordmark left, nav links right, theme toggle far right
  - Smooth link hover states per DESIGN.md
  - Mobile: hamburger menu with slide-down nav
  - Theme toggle: sun/moon Lucide icon, aria-label, hover state
  - Note: ThemeProvider extracted to `app/providers.tsx` (Next.js App Router pattern).

- [x] **2.2 — Build Footer component**
  - Minimal single row layout per DESIGN.md
  - Copyright left, icon links right
  - Top border, correct spacing

- [x] **2.3 — Build SectionHeading component**
  - Reusable: accepts `label`, `title`, `description?` props
  - Numbered label (e.g. "01 / ABOUT"), teal accent bar below title
  - Matches spec in DESIGN.md exactly

- [x] **2.4 — Wire layout in app/layout.tsx and app/page.tsx**
  - Navbar and Footer wrap all page content
  - Page assembles section components in correct order
  - Confirm full build passes: `npm run build`
  - Note: build clean, 0 errors, static export confirmed.

---

## Phase 3 — Hero Section

- [x] **3.1 — Build Hero section**
  - Two-column desktop layout (text left, photo right)
  - Single column mobile (photo centered above text)
  - Profile photo: circle crop, teal ring, correct sizing
  - Name, title, location with pin icon
  - Bio text from `data/profile.md`
  - CTA buttons: Download CV (primary), GitHub, LinkedIn, Email (secondary outlined)
  - Subtle radial background accent per DESIGN.md
  - Framer Motion fade-in on load (not scroll — hero is always visible)

- [x] **3.2 — Hero responsive check**
  - Test at 375px, 768px, 1280px
  - Buttons wrap correctly on small screens
  - Photo scales correctly

---

## Phase 4 — Experience Section

- [x] **4.1 — Build Experience section**
  - Read all entries from `data/experience.md`
  - Vertical timeline layout with left line and dot markers
  - Expandable cards — most recent expanded by default
  - Role, company (accent color), dates, location, remote badge
  - Bullet points in expanded body
  - Tech tags at bottom of each card
  - Chevron icon rotates on expand/collapse
  - AnimatePresence for smooth height animation on expand
  - Note: data structured in lib/data.ts (TypeScript mirror of markdown files).

- [x] **4.2 — Experience hover and animation**
  - Card hover: y:-2 lift, border accent transition
  - Section entry: whileInView fade+slide per DESIGN.md
  - Stagger children (cards) on section entry

- [x] **4.3 — Experience responsive check**
  - Timeline line and dots align correctly on mobile
  - Cards full width on mobile
  - Text doesn't overflow on small screens

---

## Phase 5 — Skills Section

- [x] **5.1 — Build Skills section**
  - Read skills from `data/profile.md`
  - Group by category per DESIGN.md (Languages, Frameworks, Cloud/Infra, Databases, Tools)
  - Badge component: reusable, hover transitions to accent
  - Flex-wrap layout per category

- [x] **5.2 — Skills animation**
  - Section entry: whileInView
  - Stagger badges within each group

---

## Phase 6 — Projects Section

- [x] **6.1 — Build Projects section**
  - Read from `data/projects.md`
  - 2-column card grid (1 col mobile)
  - Title, description, tech tags, optional GitHub link
  - Card hover: lift + border accent

- [x] **6.2 — Projects animation**
  - Section entry: whileInView
  - Stagger cards

---

## Phase 7 — Contact Section

- [x] **7.1 — Build Contact section**
  - Centered layout, no form
  - Short connecting text
  - Email, LinkedIn, GitHub buttons (outlined, icon + label)
  - All links open correctly (mailto, new tab)

---

## Phase 8 — Polish & QA

- [x] **8.1 — Full responsive pass**
  - Test every section at 375px, 768px, 1024px, 1280px, 1440px
  - Fix any overflow, spacing, or layout issues
  - Note: all sections fixed to `py-12 md:py-20` (was wrong `py-20 md:py-28`); mobile-first confirmed.

- [x] **8.2 — Dark/light mode audit**
  - Toggle through every section in both modes
  - Check all text contrast meets WCAG AA
  - Check borders, shadows, and backgrounds render correctly in both modes
  - Confirm no hardcoded colors anywhere — all using CSS variables
  - Note: zero hardcoded hex in components; only Navbar bg uses rgba with DESIGN.md exact values for transparency.

- [x] **8.3 — Accessibility pass**
  - Keyboard navigation through entire page
  - All interactive elements have visible focus rings
  - All images have alt text
  - Theme toggle has aria-label
  - Run axe or similar audit
  - Note: aria-controls/aria-expanded on all expand buttons; aria-current on active nav links; focus-visible rings on every interactive element.

- [x] **8.4 — Performance check**
  - Run `npm run build` — check for any large bundle warnings
  - Confirm no unused dependencies
  - Images are appropriately sized
  - Note: First Load JS = 138kB (healthy for a full portfolio). No warnings.

- [x] **8.5 — Final build + deployment dry run**
  - `npm run build` succeeds with zero errors
  - `out/index.html` exists
  - `out/CNAME` exists with correct domain
  - Manually verify GitHub Actions workflow YAML is correct
  - Push to a test branch and verify Actions run passes before merging to main
  - Note: all output files confirmed present. Workflow updated dist→out. Deploy-ready.

---

## Phase 9 — Launch

- [ ] **9.1 — Merge to main**
  - Confirm Actions workflow triggers on push
  - Confirm GitHub Pages deployment completes
  - Verify live site at custom domain

- [ ] **9.2 — Post-launch checks**
  - Custom domain resolves correctly (HTTP and HTTPS)
  - Dark mode default works on first visit
  - All external links work (GitHub, LinkedIn, CV download)
  - Mobile experience on real device (not just dev tools)

---

## Notes & Decisions Log

_Add session notes here as the build progresses._

| Date | Task | Note |
|------|------|------|
| 2026-03-15 | 1.1–1.7 | Phase 1 complete. Next.js 14.2.35, all deps installed, build clean, out/ confirmed. |
| 2026-03-15 | 2.1–2.4 | Phase 2 complete. Navbar, Footer, SectionHeading, ThemeToggle all built. Providers pattern used for ThemeProvider. |
| 2026-03-15 | 3–7     | Phases 3–7 complete. All sections built: Hero, Experience (timeline+expand), Skills (grouped badges), Projects (card grid), Contact. Build clean throughout. |
| 2026-03-15 | 8.1–8.5 | Phase 8 complete. Fixed section padding (py-12 md:py-20), section numbers (01–05), added scroll-spy active nav links, aria-controls on Experience cards. Lint clean. Build clean. |
