# DESIGN.md — Semantic Design System (Stitch)

> Stitch agent-friendly single source — premium, anti-slop.

## 1. Atmosphere
Calm Linear minimal portfolio for recruiters, trust-first, dense content but airy. Not agency experimental. `VARIANCE 6 / MOTION 5 / DENSITY 4` (taste-skill).

## 2. Color Calibration
- Base: #fafafa bg, #ffffff card, #111 text, #444 secondary, #eaeaea border. Warm monochrome, no gradients.
- Accent: single #0066ff (<80 sat). Lila purple glow banned. Premium beige/brass banned.
- Contrast: text 4.5:1 body, 3:1 large, focus 3:1 change. Two-color focus #0066ff + 4px rgba 18% glow.

## 3. Typography
- Family: `Geist 400-800` + `Geist Mono 400` → Inter fallback. Tight tracking -0.6 title, line 1.6 body 65ch max, tabular-nums for stats.
- Scale: H1 2.4rem 800, H2 1.6rem 800, mono 0.7rem uppercase 0.3 tracking label.
- Anti: serif mixed, Inter solo, 6-line wraps.

## 4. Components
- **Header:** fixed 56-60, blur saturate 180% 12px, 44px toggle, nav 0.2rem gap 8px radius, active #f0f4ff not border-bottom.
- **Cards:** flat 1px border, radius 8-12, hover border #dbe6ff + diffuse shadow only, active scale 0.98, 44px min tap.
- **Buttons:** full-output, no pill large container, 44px min, focus thick.
- **Progress:** 6px bar #eaeaea, fill #0066ff 0.9s cubic-bezier, reduced none.

## 5. Layout Principles
- Container 760 (820@1200) clamp padding, scroll-padding 80px, safe-area inset. 2-col cert →1col@768, Location flex row@600. Grid over flex-math.
- Spacing: section py 1.75-2.5rem (not py-32 AIDA — preserve vs overhaul), gap 1rem. No bento empty cell.

## 6. Motion Philosophy
- Engine: Motion `cubic-bezier(0.16,1,0.3,1)` only transform/opacity, will-change where needed. Dots bounce 1.2s -0.32/-0.16 ease-in-out, blink 1.1s, modal 0.2s. Gate `prefers-reduced-motion: reduce → none`.

## 7. Anti-Patterns (banned)
Inter solo, neon glow, pure #000, oversaturated, h-screen, w-[calc], custom cursor, duplicate CTA intent, placeholder //TODO, emoji, gradients on large bg, 3-col Bootstrap without whitespace.

## 8. Stitch Prompting
Use this file as prime for `labs.google/stitch` screen gen — all screens inherit mood/density.

---
*For redesign-existing-projects: preserve structure, audit-first, upgrade vanilla CSS only.*
