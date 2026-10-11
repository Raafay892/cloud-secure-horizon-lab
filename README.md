# NuevoCrypt · Cloud Security & Privacy Lab

Website for **NuevoCrypt** and the **Cloud Security & Privacy (CSP) Lab** at the Military College of Signals, NUST.
Live at [nuevocrypt.com](https://nuevocrypt.com).

## Tech stack

- [Vite](https://vitejs.dev/) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) components
- React Router for client-side routing
- Hosted on [Vercel](https://vercel.com/)

## Local development

Requires Node.js 18+.

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Editing content

Most content lives in plain data files, so text changes rarely need component edits:

| What | File |
| --- | --- |
| Lab name, address, contact email and phone | `src/data/site.ts` |
| NuevoCrypt copy, selling points, workflow, partners | `src/data/nuevocrypt.ts` |
| Team members and photos | `src/data/team.ts` (photos in `public/images/`) |
| Research areas | `src/data/research.ts` |
| Publications | `src/data/publications.ts` |

Brand assets (logos, partner logos, hero art, brochure) are in `public/brand/`.

## Deployment

Pushing to `main` deploys to Vercel. `vercel.json` rewrites every route to `index.html` so that
deep links such as `/research` work when opened directly.
