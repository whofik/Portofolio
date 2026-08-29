# AGENTS.md

## Commands
- `npm install` — install (note: `package-lock.json` is gitignored, no lockfile in repo)
- `npm run dev` — Vite dev server
- `npm run build` / `npm run preview` — production build + preview
- `npm run lint` — `eslint .` (flat config, `dist/` ignored)
- `npm test` — `vitest run` (single run); `npm run test:watch` — watch; `npm run test:coverage`
- Single test: `npx vitest run src/__tests__/components/Header.test.jsx` (or any file matching `src/__tests__/**/*.{test,spec}.{js,jsx}`)

## Stack & Entrypoints
- Vite 8 + React 19, ESM (`"type": "module"`), deployed on Vercel (SPA rewrite in `vercel.json`).
- Entry: `src/main.jsx` → `src/App.jsx`. `App.jsx` lazy-loads `Certificates`, `Projects`, `Music`, `Contact` (each wrapped in `Suspense` + `ErrorBoundary`); `Header`, `About`, `Skills`, `Location` are eager.
- Single source of truth for SEO/content: `src/constants/settings.js` (site URL/title/description, author, social links, `skillData`, `certificateData`, `locationData`, `buildDate`). Vite's `htmlPlugin` in `vite.config.js` injects these into `index.html` at build time — edit settings there, not `index.html` directly.

## Build / Vite Quirks
- `vite.config.js` defines `__BUILD_DATE__` (`new Date().toISOString().split('T')[0]`) — declared as `readonly` global in `eslint.config.js`.
- `ViteImageOptimizer` compresses jpg/jpeg/png/webp to quality 80; `sharp` + `svgo` must be installed for it.
- `manualChunks` splits `react`, `react-dom`, `react-helmet-async` into `vendor` chunk. `build.target` is `es2020`.

## Tests
- Vitest config: `vitest.config.js` — `environment: jsdom`, `globals: true`, `setupFiles: ['./src/__tests__/setup.js']`, `css: false`, include only `src/__tests__/**/*.{test,spec}.{js,jsx}`.
- `setup.js` mocks `localStorage`, `IntersectionObserver`, `Element.prototype.scrollIntoView` and clears `localStorage` in `beforeEach`. Don't re-mock these per-test.
- GitHub cache key in `src/utils/githubloader.js` is `YahahaHayuuuuu`, TTL 15 min.

## Lint / Style
- `eslint.config.js` uses flat config with `eslint-plugin-react-hooks` + `react-refresh`. Rule `no-unused-vars` allows `^[A-Z_]`; disabled entirely in `src/__tests__/`.
- Styling is vanilla CSS only — `src/styles/*.css` + `src/index.css`. No Tailwind/CSS framework.

## Content Updates
- Certificates: add image to `public/sertifikat/` (`nama-penerbit-event-tanggal.jpg`) then append to `certificateData` in `settings.js`; update `public/sitemap.xml`.
- SEO: edit `settings.js` or `src/components/SEO.jsx` (JSON-LD schemas: Person, ProfilePage, WebSite, FAQPage).
- Assets in `public/` are served as-is (logos in `public/logo/`, favicon, `robots.txt`, `sitemap.xml`).

## Gotchas
- `index.html` hardcodes Indonesian (`lang="id"`), Inter font from Google Fonts, and dns-prefetch/preconnect for fonts, `api.github.com`, Spotify — keep in sync with `settings.js`.
- `src/main.jsx` blocks `contextmenu` and `F12`/`Ctrl+Shift+I` — this will interfere with manual browser debugging.
- `.gitignore` ignores `package-lock.json`, `docs/`, `.vercel`, `coverage/`, `.env.*.local` — don't expect lockfile diffs in PRs.
- Vercel headers: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, immutable cache for `/assets/*`.
