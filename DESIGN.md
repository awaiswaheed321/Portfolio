# DESIGN.md — Portfolio Visual Specification

Read this file in full before building or modifying any UI component.
All design decisions here take precedence over your own defaults.

---

## Concept — "Observability"

The site reads like the work: reliability engineering. The hero is a craft
statement — *"I build systems that fail loudly — and rarely."* — over a faint
blueprint grid, with the animated spectrum strip (all five hues, slowly panning along the
top edge) as the living element. Cool dark base with life in it; a soft
blue-grey light mode alongside (never pure white).

**The one thing a visitor should remember:** the thesis line and the color system.

---

## Color System

Two themes, both first-class. Light is `:root`, dark is `.dark` on `<html>`
(set pre-paint by the inline script in `app/layout.tsx`; user preference in
`localStorage.theme`, falling back to OS). Tokens live in `app/globals.css`,
mapped in `tailwind.config.ts`. Never hardcode hex values in components.

Semantics: `ground` = page, `surface` = raised, `ink` = primary text,
`fog` / `mist` = secondary / tertiary text. **Volt is the interaction color;
the other four hues are series colors** (dashboards give every series its
own hue) used for section identity.

```css
/* light */                      /* dark */
--ground:      #DEE4EF;          #0B0D15;   /* light is grey-blue paper, never white */
--surface:     #EBEFF6;          #11141F;
--surface-2:   #CFD7E5;          #161A28;
--line:        #B9C3D6;          #212740;
--line-faint:  #CBD3E2;          #171C2C;
--ink:         #141823;          #ECEFF8;
--fog:         #49536A;          #9AA4BC;
--mist:        #525D76;          #7E89A8;   /* keep ≥4.5:1 on ground */
--volt:        #2A4EDB;          #5C8AFF;   /* blue · interaction + Experience */
--volt-strong: #1E3FC9;          #85AAFF;   /* hover: darker on light, brighter on dark */
--iris:        #6D3FE0;          #9B7BFF;   /* violet · Education */
--aqua:        #0C677F;          #3EC8E0;   /* cyan · Toolchain */
--rose:        #BE185D;          #F472B6;   /* magenta · Selected Work */
--ok:          #116A33;          #4ADE80;   /* green · status dot + Contact */
```

**Rules:**
- **Interactive = volt, always** (link hovers, primary CTA, expand buttons).
  Section hues are identity only: heading labels, ghost numerals, skill
  chips, project row accents, metric cards.
- Section hue map: 01 Experience volt · 02 Education iris · 03 Toolchain
  aqua · 04 Selected Work rose · 05 Contact ok. Pass static Tailwind
  classes + the CSS var to `SectionHeading`.
- Gradients: `.volt-gradient` (volt→iris→rose) on the hero phrase;
  `.mint-gradient` (ok→aqua) on the contact phrase; `.spectrum-strip`
  (all five hues, animated pan) as the 2px top edge in the navbar.
  Never gradient body text.
- Tinted fills (chips, metric card edges) use
  `color-mix(in srgb, var(--hue) N%, transparent)` — Tailwind alpha
  modifiers do NOT work on var() colors.
- All five hues pass 4.5:1 on ground in BOTH themes — don't brighten the
  light values or darken the dark ones without rechecking.
- Filled-volt elements use `text-ground`; never `text-white`.
- No gold/amber, no teal-as-primary. Glow lives in `--cta-glow`.
- Light mode must never use pure white or near-white grounds; keep the
  blue-grey paper feel (owner: bright white hurts the eyes).

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
Section padding:    py-14 mobile, py-20 desktop
```

- Sections 01–04 use the `Section` shell: on lg+ a sticky left rail
  (250px) holds the ghost numeral, mono index, title, and description
  while content scrolls in the right column. Mobile stacks normally.
- Every section has its own shape — the page must NOT read as stacked
  full-width rows: Experience is a timeline (rail line + node dots, volt
  when expanded); Education is a pair of cards; Skills is a bento mosaic
  (three small tiles, then two wide, spans tuned to chip counts);
  Projects is a featured-card grid (first project spans the row; the
  last card stretches if it would orphan). Cards share one anatomy:
  rounded-[12px], `bg-surface`, hairline border, 2px hue top edge via
  color-mix, hover lift.
- Contact (05) deliberately breaks the rail pattern: one centered
  finale panel with a soft mint radial glow.
- Hero: `.hero-grid` blueprint texture, then the metric board — four `Stat` cards (uptime, peak msgs/day, stores, years),
  one hue each, colored top edge. All numbers sourced from
  data/experience.md; throughput is one card among four, never the headline.
- Copy style: avoid em-dashes in site copy — prefer periods, commas, or
  colons. Use `·` as the separator in titles and labels.

---

## Motion

One orchestrated moment (hero entrance, staggered rise, 0.7s,
`cubic-bezier(0.22,1,0.36,1)`) plus two quiet living elements: the
spectrum strip's 14s gradient pan and the status dot's 2.4s pulse.
No pulse/heartbeat line in the page body (owner removed it); the ECG
blip survives only as the favicon/OG brand glyph.

- **LCP rule:** hero h1 and bio use `hero-rise-solid` (transform only —
  never animate the LCP element from `opacity: 0`).
- Scroll reveals: `Reveal` toggles `.is-visible`; hidden state is gated
  behind `html.js` so content is visible without JavaScript.
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
