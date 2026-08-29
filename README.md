# Muhammad Fikri — Portfolio 2026

> Pelajar Sekolah • Web Developer Jakarta (Serang→DKI Jakarta) — React 19 + Vite 8, SEO/GEO perfect, WCAG 2.2 AA, Core Web Vitals hijau. Live: **https://muhammadfikri.web.id**

## 🚀 Tech Stack
- **Framework:** React 19 + `react-helmet-async`
- **Build:** Vite 8 + `vite-plugin-image-optimizer` (sharp + svgo, 52% saving, quality 72)
- **Styling:** Vanilla CSS only (`src/styles/*.css` + `src/index.css`) — no Tailwind, clamp typography, backdrop-blur header
- **SEO/GEO:** JSON-LD 7 schema (Person, Organization, BreadcrumbList, Article, ProfilePage, WebSite SearchAction, FAQPage 5Q), `llms.txt`, `sitemap.xml` with images, `og-image.jpg` 1200×630 self-host
- **Perf:** Lazy 4 chunks (`requestIdleCallback` prefetch), Spotify facade, `fetchPriority` + `aspect-ratio 16/10` CLS 0.02, `scroll-padding-top 80px`
- **A11y:** WCAG 2.2 AA — `focus-visible` C40 two-color (#0066ff 2px + 4px glow), 44px tap, `prefers-reduced-motion`, `sr-only`, `scroll-padding` untuk sticky header
- **Deploy:** Vercel SPA rewrite + immutable cache `/assets` `/sertifikat` `/logo` + `Referrer-Policy`/`Permissions-Policy`

## 🛠️ Commands
```bash
npm install          # install (package-lock gitignored)
npm run dev          # Vite dev  http://localhost:5173
npm run build        # vite build → dist/ (569ms)
npm run preview      # preview prod build
npm run lint         # eslint . (flat, dist ignored)
npm test             # vitest run 11 files 78 tests
npm run test:watch   # vitest watch
npm run test:coverage
npx vitest run src/__tests__/components/Header.test.jsx  # single file
```

## 📁 Struktur
```
src/
  main.jsx → App.jsx — Header/About/Skills/Location eager; Certificates/Projects/Music/Contact lazy+Suspense+ErrorBoundary
  constants/settings.js — single source of truth (siteUrl/title/desc, author, social, skillData, certificateData, locationData, buildDate)
  components/SEO.jsx — 7 JSON-LD + meta (og/twitter/canonical/hreflang id+x-default)
  utils/githubloader.js — cache YahahaHayuuuuu 15m, fetchWithRetry
  styles/ — App.css (760→820 clamp), Header.css (blur), About.css, Skills.css, etc.
public/
  sertifikat/ — 8 images 2026 (nama-penerbit-event-tanggal.jpg) → sitemap image:image
  logo/ — Banten + Jakarta SVG (84KB/130KB after svgo)
  og-image.jpg — 1200×630 62KB self-host (sharp cover)
  blog/react-vite-portfolio-performance-2026.html + .md — cluster 1/5 152w definition-first (RZLT 134-167w)
  llms.txt + .well-known/llms.txt — GEO map untuk GPTBot/ClaudeBot/PerplexityBot/Google-Extended
```

## 📝 Update Konten (tanpa ubah struktur)
### Sertifikat
1. Taruh foto di `public/sertifikat/nama-penerbit-event-tanggal.jpg`
2. Append ke `certificateData` di `src/constants/settings.js`
3. `public/sitemap.xml` otomatis terindeks — build akan optimasi via sharp

### Skills / SEO
- Edit `skillData` / `siteTitle` / `siteDescription` / `siteKeywords` (20 long-tail) di `settings.js` — `vite.config.js htmlPlugin` inject ke `dist/index.html` build-time, jangan edit `index.html` langsung

### Blog cluster (GEO 2026)
- Tambah `public/blog/<slug>.html` + `.md` (152w definition-first + Article+FAQPage schema) — update `sitemap.xml` + `llms.txt`

## 🔍 SEO & GEO Checklist 2026
- `sitemap.xml` 3 URLs (`/` + `/blog` + `/llms.txt`) + 9 images incl. og-image
- `robots.txt` Allow GPTBot/ClaudeBot/PerplexityBot/GoogleOther/applebot, Sitemap absolute
- `llms.txt` valid H1 Markdown — 17 entity knowsAbout, 7 schema linked
- Keywords 20 long-tail: `Muhammad Fikri Portfolio, Web Developer Jakarta, React Vite, Portfolio Pelajar` dll — `siteKeywords` + `FAQ 5Q`
- Core Web Vitals: LCP 1.2s (avatar 140 eager + aspect), INP 140ms (idle prefetch), CLS 0.02 (aspect-ratio)

## ♿ A11y & Animasi
- Focus: `*:focus-visible 2px #0066ff offset2px + 4px glow 3:1` (WCAG 2.4.7/2.4.11/2.4.13), bukan `outline:none`
- Dots: `Projects loading-dots bounce 1.2s ease-in-out -0.32/-0.16s` (CSSTools), cursor `1.1s ease-in-out` — semua gate `prefers-reduced-motion: reduce`
- Best Practices: no `contextmenu/F12 block` (agentic browsing butuh menu), no console errors, bfcache eligible

## ⚡ Perf Notes
- `vite.config.js` `Sharp 72q, exclude avatar, assetsInline 4KB, cssMinify true, manualChunks vendor`
- `index.html` `preconnect fonts+gstatic+api.github`, `preload style Inter display=swap`, `dns-prefetch spotify/i.scdn`
- `Music.jsx` facade button → iframe `loading=lazy` on click (hemat 150KB)
- `vercel.json` headers: `X-Content-Type-Options nosniff, X-Frame-Options DENY, Referrer strict-origin, Permissions camera/mic/geolocation=()` + immutable 1yr

## 🧪 Test
Vitest `jsdom` + `globals` + `setupFiles ./src/__tests__/setup.js` (mock localStorage, IntersectionObserver, scrollIntoView). Coverage via `npm run test:coverage`.

## 🌐 Deploy
Vercel — `vercel.json` SPA rewrite `/(.*)→/index.html`. Env: single domain `https://muhammadfikri.web.id`. Build command `npm run build` output `dist/`.

---
*Built with taste-skill × seo-audit — minimalist, fast, AI-ready. 2026.*
