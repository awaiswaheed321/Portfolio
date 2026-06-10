# DESIGN.md — Portfolio Visual Specification

Read this file in full before building or modifying any UI component.
All design decisions here take precedence over your own defaults.

---

## Concept — "Observability"

The site reads like the work: reliability engineering. The hero is a craft
statement — *"I build systems that fail loudly — and rarely."* — over a faint
blueprint grid, with an oscilloscope pulse line (one ECG blip, a traveling
volt segment) as the signature element. Cool dark base with life in it;
a genuinely polished light mode alongside.

**The one thing a visitor should remember:** the thesis line and the pulse trace.

---

## Color System

Two themes, both first-class. Light is `:root`, dark is `.dark` on `<html>`
(set pre-paint by the inline script in `app/layout.tsx`; user preference in
`localStorage.theme`, falling back to OS). Tokens live in `app/globals.css`,
mapped in `tailwind.config.ts`. Never hardcode hex values in components.

Semantics: `ground` = page, `surface` = raised, `ink` = primary text,
`fog` / `mist` = secondary / tertiary text, `volt` = the one electric accent.

```css
/* light */                      /* dark */
--ground:      #F5F7FC;          #0B0D15;
--surface:     #FFFFFF;          #11141F;
--surface-2:   #EDF0F8;          #161A28;
--line:        #D9DEEC;          #212740;
--line-faint:  #E7EAF4;          #171C2C;
--ink:         #141823;          #ECEFF8;
--fog:         #4E586E;          #9AA4BC;
--mist:        #626E89;          #7E89A8;   /* keep ≥4.5:1 on ground */
--volt:        #2E55E8;          #5C8AFF;
--volt-strong: #1E40D8;          #85AAFF;   /* hover: darker on light, brighter on dark */
--volt-arc:    #6D3FE0;          #9B7BFF;   /* gradient end only */
--ok:          #15803D;          #4ADE80;   /* status dot only */
```

**Rules:**
- Volt is the only accent: section labels, the gradient phrase
  (`.volt-gradient`), primary CTA, link hovers, open-entry borders.
- The volt→arc gradient appears on exactly two phrases (hero "fail loudly",
  contact "Let's talk.") — never on body text.
- Glow lives in tokens (`--cta-glow`, `--pulse-glow`) so light mode can be
  subtler than dark.
- Tailwind alpha modifiers (`text-volt/60`) do NOT work on var() colors —
  add an explicit token (see `--volt-soft`).
- Filled-volt elements use `text-ground` (adapts per theme and passes AA
  both ways); never `text-white`.

---

## Typography

| Face | Token | Job |
|------|-------|-----|
| Bricolage Grotesque 500/600 | `font-display` | Headlines, section headings, role/project titles, wordmark |
| Geist Sans | `font-sans` | Body text |
| Geist Mono | `font-mono` | Telemetry: labels, dates, stats, tech stacks, nav links, buttons |

- Hero headline: `clamp(2.3rem, 5.8vw, 4.3rem)`, weight 600, `tracking-[-0.02em]`.
- Section headings: `clamp(1.8rem, 3.8vw, 2.6rem)`.
- Mono labels: uppercase, tracking 0.14–0.22em, 11–13px.
- Body: 15–17px, leading 1.7–1.8, `text-fog`.

---

## Layout

```
Max content width:  1100px (max-w-content)
Horizontal padding: px-6 mobile, px-10 tablet, px-12 desktop
Section padding:    py-16 mobile, py-24 desktop
```

- Sections use `SectionHeading` with mono index labels (`01 · Experience` …
  `05 · Contact`) prefixed by a short volt dash.
- Content is hairline rows (`border-t border-line-faint`, `last:border-b`) —
  no cards, no pills. Skills are a ledger (mono category left, prose right).
  Projects are an editorial index (mono number, title, volt context tag).
- Experience entries carry a 2px left border: volt when expanded,
  transparent→line on hover when collapsed.
- Hero only: `.hero-grid` blueprint texture (masked radial fade from top).

---

## Motion

One orchestrated moment (hero entrance, staggered rise, 0.7s,
`cubic-bezier(0.22,1,0.36,1)`) plus one living element (the pulse trace).

- **LCP rule:** hero h1 and bio use `hero-rise-solid` (transform only —
  never animate the LCP element from `opacity: 0`).
- Scroll reveals: `Reveal` toggles `.is-visible`; hidden state is gated
  behind `html.js` so content is visible without JavaScript.
- Pulse trace: CSS dash animation on a `pathLength`-normalized SVG path;
  the only looping animation on the site. Static at 50% opacity under
  `prefers-reduced-motion`.
- Experience expand: CSS `grid-template-rows 0fr→1fr`.
- Theme switch: 0.3s background/color transition (disabled under
  reduced motion).

NO parallax, NO scroll-jacking, NO particles, NO badge pills, NO card grids.

---

## Theme machinery

- Inline script in layout (pre-paint): adds `js` class + resolves `dark`
  class from `localStorage.theme` → OS preference. `<html>` carries
  `suppressHydrationWarning` because of this intentional mutation.
- `ThemeToggle` is stateless: toggles the class + localStorage; the visible
  sun/moon icon is chosen by CSS `dark:` variants, so server and client
  markup always match (no hydration state).
- `color-scheme` is set per theme in globals.css; `themeColor` viewport
  metadata carries both values with media queries.

---

## Accessibility & Quality Floor

- Lighthouse: ≥95 performance, 100 a11y / best-practices / SEO
  (verified 97/100/100/100 against a gzip server, June 2026).
- `--mist` is the contrast floor in both themes.
- Global `:focus-visible` volt outline.
- Icons are aria-hidden inline SVGs (`components/ui/Icons.tsx`, zero deps).
- h1 has an `sr-only` name/title prefix; the visible h1 is the thesis.
- Test at 375 / 768 / 1440 in BOTH themes; check `scrollWidth` for overflow
  (inline spans need whitespace text nodes to wrap).

---

## Content Rules

- All copy comes from `lib/data.ts`, mirroring `data/*.md`. Update both.
- The pipeline is **not** "mission-critical" — it is the event stream
  powering analytics and debugging for 7-Eleven's delivery platform.
  Owner's correction (June 2026); do not reintroduce the phrase.
- The hero leads with craft (failing loudly / nothing fails silently —
  sourced from the 3-day-outage and DLQ bullets), not throughput numbers.
- OG image is a pre-rendered static `public/og.png` — GitHub Pages serves
  extensionless `opengraph-image` routes with the wrong MIME type. To
  regenerate: temporarily restore `app/opengraph-image.tsx` (force-static),
  build, copy `out/opengraph-image` → `public/og.png`, delete the route.
