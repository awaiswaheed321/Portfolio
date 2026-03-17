# DESIGN.md — Portfolio Visual Specification

Read this file in full before building or modifying any UI component.
All design decisions here take precedence over your own defaults.

---

## Design Philosophy

Refined minimalism with strong typographic hierarchy.
The site should feel like it was built by an engineer who has taste.
Not over-designed. Not a template. Not a bootcamp portfolio.

One dominant accent color. Generous whitespace. Subtle depth through layering.
Dark mode is the primary experience. Light mode is equally polished, not an afterthought.

**The one thing a visitor should remember:** clean, confident, technically sharp.

---

## Color System

Defined as CSS variables in `globals.css`. Use these everywhere — never hardcode hex values
in components. Tailwind should reference these via `tailwind.config.js` custom colors.

```css
:root {
  /* Light mode */
  --bg-primary: #F8F9FC;
  --bg-secondary: #FFFFFF;
  --bg-tertiary: #EEF0F6;
  --text-primary: #0F1117;
  --text-secondary: #5A6072;
  --text-muted: #8B92A9;
  --accent: #0D9488;
  --accent-hover: #0F766E;
  --accent-subtle: #CCFBF1;
  --border: #E2E5EF;
  --border-subtle: #F0F2F8;
  --shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
}

.dark {
  --bg-primary: #0F1117;
  --bg-secondary: #1A1D27;
  --bg-tertiary: #22263A;
  --text-primary: #F0F2F8;
  --text-secondary: #8B92A9;
  --text-muted: #5A6072;
  --accent: #2DD4BF;
  --accent-hover: #14B8A6;
  --accent-subtle: #0D2D2A;
  --border: #2A2E3F;
  --border-subtle: #1E2130;
  --shadow: 0 1px 3px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
}
```

---

## Typography

**Font stack:** Geist Sans for all text, Geist Mono for code/tech terms.
Load via `next/font/local` (ships with Next.js 14).

```css
/* Scale */
--text-xs:   0.75rem;   /* 12px — labels, timestamps */
--text-sm:   0.875rem;  /* 14px — metadata, badges */
--text-base: 1rem;      /* 16px — body */
--text-lg:   1.125rem;  /* 18px — lead text */
--text-xl:   1.25rem;   /* 20px — card titles */
--text-2xl:  1.5rem;    /* 24px — section headings mobile */
--text-3xl:  1.875rem;  /* 30px — section headings desktop */
--text-4xl:  2.25rem;   /* 36px — hero subtitle */
--text-5xl:  3rem;      /* 48px — hero name */
--text-6xl:  3.75rem;   /* 60px — hero name desktop */
```

**Rules:**
- Headings: `font-weight: 700`, `letter-spacing: -0.02em`
- Section labels (e.g. "Experience"): `font-weight: 600`, `letter-spacing: 0.08em`, `text-transform: uppercase`, `font-size: var(--text-xs)`, accent color
- Body: `font-weight: 400`, `line-height: 1.7`
- Muted metadata (dates, locations): `var(--text-secondary)`, `var(--text-sm)`

---

## Layout

```
Max content width:  1024px (max-w-5xl)
Horizontal padding: 24px mobile, 32px tablet, 48px desktop
Section padding:    80px top/bottom desktop (py-20), 48px mobile (py-12)
Card border-radius: 12px
Button border-radius: 8px
Badge border-radius: 6px
```

**Grid:**
- Skills: 2 cols mobile, 3 cols tablet, 4 cols desktop
- Projects: 1 col mobile, 2 cols tablet+
- Experience: single column timeline

---

## Navbar

- **Position:** sticky top, full width
- **Background:** `var(--bg-primary)` with `backdrop-filter: blur(12px)` and slight transparency (`/90` opacity)
- **Border:** 1px bottom border using `var(--border)` — only visible when scrolled (add via scroll listener)
- **Left:** Name as wordmark — `font-weight: 700`, accent color on hover
- **Right:** Nav links + theme toggle icon button
- **Nav links:** `var(--text-secondary)` default, `var(--text-primary)` on hover, smooth transition
- **Active link:** accent color underline (2px, offset 4px)
- **Theme toggle:** sun/moon icon from Lucide, `var(--text-secondary)`, hover background `var(--bg-tertiary)`, rounded-full, 36x36px
- **Mobile:** hamburger menu that opens a slide-down or full-screen overlay — links stacked vertically
- **Height:** 64px desktop, 56px mobile

---

## Hero Section

- **Layout:** Two columns on desktop (text left, photo right). Single column on mobile (photo above text centered).
- **Photo:** Circle crop, 180px desktop / 120px mobile, subtle ring: `2px solid var(--accent)` with 4px offset
- **Name:** `var(--text-5xl)` mobile, `var(--text-6xl)` desktop, `font-weight: 700`, `letter-spacing: -0.03em`
- **Title:** `var(--text-xl)`, `var(--text-secondary)`, normal weight
- **Location:** small, `var(--text-muted)`, pin icon from Lucide inline
- **Bio:** `var(--text-base)`, `var(--text-secondary)`, max-width 540px, `line-height: 1.7`
- **CTA buttons:**
  - Primary (Download CV): filled teal background, white text, download icon
  - Secondary (GitHub, LinkedIn, Email): outlined, `var(--border)` border, icon + label, hover fills with `var(--bg-tertiary)`
  - Gap between buttons: 12px, wrap on mobile
- **Background:** subtle radial gradient from accent color at very low opacity (3-5%) centered behind the photo — barely perceptible depth, not a flashy gradient

---

## Section Headings

Reusable `SectionHeading` component. Structure:

```
[accent-colored uppercase label]   e.g. "02 / EXPERIENCE"
[large heading text]               e.g. "Work Experience"
[optional short descriptor]        e.g. one line of context
[teal underline accent bar]        24px wide, 3px tall, rounded
```

- Label: `var(--text-xs)`, `var(--accent)`, `letter-spacing: 0.1em`, `font-weight: 600`
- Heading: `var(--text-3xl)`, `font-weight: 700`
- Accent bar: `width: 40px`, `height: 3px`, `background: var(--accent)`, `border-radius: 2px`, `margin-top: 12px`

---

## Experience Section

**Layout:** Vertical timeline. Left edge has a continuous vertical line in `var(--border)`.
Each entry has a teal circle dot on the line aligned with the role title.

**Card structure per entry:**
- Background: `var(--bg-secondary)`, border: `var(--border)`, border-radius: 12px
- Padding: 24px
- Top row: Role title (bold) + date range (muted, right-aligned)
- Second row: Company name (accent color) + location (muted) + remote badge if applicable
- Expandable body: bullet points, hidden by default, revealed with smooth height animation
- Expand trigger: chevron icon button, rotates 180deg when open
- Tech tags at bottom: same style as skill badges (see below)
- Hover: `y: -2px` lift, border color transitions to `var(--accent)` at 40% opacity

**Most recent role** should be expanded by default.

---

## Skills Section

**Layout:** Grouped by category. Each group has a category label above a flex-wrap of badges.

**Categories (in order):**
1. Languages
2. Frameworks & Libraries
3. Cloud & Infrastructure
4. Databases
5. Tools & Practices

**Badge style:**
- Background: `var(--bg-tertiary)`
- Border: 1px `var(--border)`
- Text: `var(--text-secondary)`, `var(--text-sm)`, `font-weight: 500`
- Padding: `6px 12px`
- Border-radius: 6px
- Hover: border transitions to `var(--accent)`, text to `var(--accent)`
- Transition: 150ms ease

---

## Projects Section

**Layout:** 2-column card grid (1 col mobile).

**Card structure:**
- Background: `var(--bg-secondary)`, border: `var(--border)`, border-radius: 12px
- Top: optional emoji or simple icon for visual variety
- Title: `var(--text-xl)`, `font-weight: 600`
- Description: `var(--text-sm)`, `var(--text-secondary)`, 2-3 lines max
- Tech tags: same badge style as skills but smaller (`var(--text-xs)`)
- Footer: GitHub link if available — icon + "View Code" text in accent color
- Hover: same lift + border accent as experience cards

---

## Contact Section

**Layout:** Centered, minimal. No form.

- Short line of text: "Want to connect or collaborate? Reach out."
- Three icon+label link buttons stacked or in a row: Email, LinkedIn, GitHub
- Each button: outlined style, icon left, label right, hover fills accent
- Links open in new tab (LinkedIn, GitHub) or mailto (Email)

---

## Footer

- Minimal single row
- Left: "© 2025 Awais Waheed"
- Right: GitHub, LinkedIn icon links
- `var(--text-muted)`, `var(--text-sm)`
- Top border: 1px `var(--border)`
- Padding: `py-8`

---

## Animations (Framer Motion)

All animations must feel natural and quick. Nothing should feel like a "loading" animation.

```typescript
// Standard section entry — use on every section wrapper
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

// Stagger container — use for lists of cards/badges
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

// Child item in a stagger
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
}
```

**Trigger:** Use `whileInView` with `viewport={{ once: true, margin: '-80px' }}` — animate once, not every scroll.

**Hover:**
```typescript
whileHover={{ y: -2 }}
transition={{ duration: 0.15 }}
```

**Experience card expand/collapse:** Use `AnimatePresence` + `motion.div` with `height: 'auto'` and `overflow: hidden`.

**Theme toggle:** CSS transition only — `transition: background-color 0.3s, color 0.3s` on `body`.

**DO NOT use:** spring physics for layout shifts, parallax on scroll, animated backgrounds, looping animations, or anything that runs continuously.

---

## Responsive Breakpoints

Follow Tailwind defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

**Test at:** 375px (iPhone SE), 768px (iPad), 1280px (standard desktop), 1440px (wide).

Mobile-first. Every component is built mobile-first and scaled up.

---

## Accessibility

- All interactive elements must have visible focus rings (use `focus-visible:ring-2 focus-visible:ring-accent`)
- Color contrast must meet WCAG AA minimum in both light and dark modes
- Theme toggle must have `aria-label`
- Nav links must be keyboard navigable
- Images must have descriptive `alt` text
- Avoid `cursor: pointer` on non-interactive elements
