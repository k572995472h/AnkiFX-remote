---
description: Checklist for adding or modifying AnkiFX visual effects
---

# Effect authoring workflow

1. Create `src/effects/your_effect.js` exporting `effect` with `id` matching the filename.
2. Implement `run(contexts, config)` and `stop()`; cancel animation frames and remove listeners in `stop`.
3. Use shared contexts only — do not `document.createElement('canvas')` for full-screen backgrounds unless documented exception.
4. Add optional `preferredTrack`, `onResize`, `controls`, `drawOverlay` as needed.
5. Put styling in `src/core/afx_styles.css` under `.afx-effect-your_effect` — no inline CSS in effect files for layout chrome.
6. Run `npm run build` — registry regenerates automatically.
7. Preview with `build/card_front_example.html` (Live Server / `npx serve build`).
8. On device: verify taps on sliders/buttons do not flip the card before and after agreeing to terms.

See `docs/effect-api.md` for the full interface.

**Gradient / Stripe lib:** changes go in `src/effects/lib/stripe-gradient-lib.js`; keep `gradient.js` as a thin wrapper. Do not change `new Gradient(contexts.canvasGL, contexts.gl, width, height)` without manual visual QA.
