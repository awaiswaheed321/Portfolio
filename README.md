# Awais Waheed — Portfolio

Personal portfolio website for Awais Waheed, Senior Backend Engineer.

Live at [awaiswaheed.net](https://awaiswaheed.net)

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Font | Geist |
| Icons | Lucide React, React Icons |
| Deployment | GitHub Pages (static export) |

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
npm run lint
```

## Content

All site content lives in the `data/` directory:

- `data/profile.md` — bio, summary, skills, education
- `data/experience.md` — work history
- `data/projects.md` — projects

Structured TypeScript representations of the same data live in `lib/data.ts`. Update both when editing content.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow which builds the site, copies `CNAME` to `out/`, and deploys to GitHub Pages automatically.
