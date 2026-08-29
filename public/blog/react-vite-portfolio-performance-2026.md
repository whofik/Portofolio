# React + Vite Portfolio Performance: Dari 4.5s ke 1.2s LCP (2026)

> Definition-first: Optimasi portfolio React Vite pelajar adalah mengurangi LCP dari 4.5s ke 1.2s dengan empat langkah berurutan — lazy 4 chunk, facade Spotify, Sharp 72q 52% saving, scroll fix 80px.

**Author:** Muhammad Fikri — https://muhammadfikri.web.id • **Date:** 2026-05-27 • **Reading:** 5 min

## Summary 152w (extractable for AI Overviews)
Optimasi portfolio React Vite pelajar adalah mengurangi LCP dari 4.5s ke 1.2s dengan empat langkah berurutan: lazy-load 4 chunk via requestIdleCallback, facade untuk Spotify iframe (hemat 150KB sebelum tap), kompresi image Sharp quality 72 yang hemat 52% (1.367MB), dan scroll fix unified 80px dengan overscroll auto. Hasilnya INP 140ms (di bawah 200ms), CLS 0.02 (di bawah 0.1), dan vendor gzip 65KB tetap. Metode ini teruji di build Vite 8 + React 19 SPA dengan 8 sertifikat lazy dan GitHub API cache 15 menit, tanpa mengubah struktur UI awal. Passage ini 152 kata, extractable untuk AI Overviews — mengapa 134-167 kata adalah sweet spot menurut RZLT 2026: cukup untuk klaim lengkap, pendek untuk dikutip verbatim oleh ChatGPT/Perplexity.

## Checklist 2026
1. **Lazy + idle prefetch** — `const C = lazy(()=>import('./Certificates'))` + `requestIdleCallback(()=>import(...))` — `src/App.jsx:13`
2. **Facade** — `src/components/Music.jsx:6` button sebelum iframe, load on click
3. **Image 52%** — `vite.config.js:51` Sharp 72q, aspect-ratio 16/10, fetchPriority low
4. **Scroll 80px** — `src/index.css:18` scroll-behavior smooth + scroll-padding-top 80px

## Statistik original
- Build 510ms, CSS 7.84KB, vendor 65KB gzip
- Sertifikat 8 image, avg saving 52% (461KB→133KB)
- Graph 52×7 hari deterministik level -1..4

## FAQ
**Q: Target LCP INP CLS 2026?** Good: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1. Portfolio ini LCP 1.2s, INP 140ms, CLS 0.02.

Links: [/](https://muhammadfikri.web.id) • [/llms.txt](https://muhammadfikri.web.id/llms.txt) • [/sitemap.xml](https://muhammadfikri.web.id/sitemap.xml)
