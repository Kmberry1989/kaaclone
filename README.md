# KAAOnline — Accessible Demo (Static Site)

This repo demonstrates how to rebuild the KAA site using accessible, SEO‑friendly HTML (no images-of-text), consistent layout, and modern UX touches like one‑click calendar saves.
..
## Features
- **Semantic HTML** and skip links
- **Consistent header/footer** and card grid
- **Add to Calendar** buttons (Apple/Outlook via `.ics`, Google Calendar link)
- **JSON‑LD** for Organization and Events
- **Alt text for all images**
- **No blocking scripts**; fast-rendering pages

## Run locally

### Quickest (Python)
```bash
# from repo root
python3 -m http.server 5173
# open http://localhost:5173
```

### Node + Vite (recommended)
```bash
npm i
npm run dev          # local dev server
npm run build        # production build -> dist/
npm run preview      # preview the built site
```

## Deploy to GitHub Pages
1. Create a new GitHub repo (e.g., `kaaonline-improved`) and push this folder.
2. In *Settings → Pages*, select **GitHub Actions** as source.
3. This repo includes a workflow that builds and deploys on each push to `main`.

### If deploying to a project subpath
If your repository is not a user/org root, Vite is configured with `base: './'`, which works for most Pages setups. If you host under `https://username.github.io/repo-name/` and see broken asset paths, set a repo-specific base in `vite.config.js`:

```js
export default defineConfig({ base: '/repo-name/' })
```

## Editing events
- Update event cards in `index.html`, `artworks-gallery.html`, etc.
- To provide `.ics` downloads, either:
  - Use the **built-in “Add to Apple/Outlook”** button (generated on the fly), or
  - Place prebuilt files in `public/ics/` and link to them.

## Notes
- Placeholder SVGs live in `public/images/`. Replace with real images (add `alt`).
- This is a demo; hook your buttons to real registration/e‑commerce as needed.
