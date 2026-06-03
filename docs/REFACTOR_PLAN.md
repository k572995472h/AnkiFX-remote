# AnkiFX modular refactor plan

Branch: `feat/refactor-modular-core`

This document defines the intended PR sequence. All work may land on one feature branch first; split into stacked PRs when merging to `main`.

## PR 1 — Docs & agent guardrails (low risk)

**Files**

- `.cursorrules` — contexts contract, controls schema, commit policy, tap-handling clarification
- `readme.md` — fix `termsText` authoring description (array → base64, not “template literal”)
- `docs/effect-api.md` — effect interface reference
- `.agents/workflows/effect-authoring.md` — checklist for new effects
- `.agents/workflows/git-feature-workflow.md` — align “commit frequently” with human-approved commits

**Acceptance**

- No runtime changes
- Agents can author effects without reading all of `engine.js`

## PR 2 — Build pipeline & tests (low risk)

**Files**

- `scripts/validate-config.js` — shared config validation + base64 compile
- `build.js` — import validator; build-time effect `id` / `run` / `stop` checks
- `tests/config-validation.test.js`
- `tests/effects-registry.test.js`
- `package.json` — `"test": "node --test tests/*.test.js"`

**Acceptance**

- `npm test` passes
- `npm run build` fails on malformed effect modules or configs

## PR 3 — Gradient / MiniGl mechanical split (medium risk)

**Files**

- `src/effects/lib/stripe-gradient-lib.js` — unchanged Stripe/MiniGl logic (copy-move)
- `src/effects/gradient.js` — thin adapter; **same** `new Gradient(contexts.canvasGL, contexts.gl, w, h)`

**Do not**

- Rewire gradient to a different canvas or GL context lifecycle
- Change constructor argument order

**Acceptance**

- Gradient effect visually identical in `build/card_*_example.html`
- Randomize control still updates marquee colors

## PR 4 — Core engine modularization (medium risk)

**Files**

- `src/core/engine.js` — orchestration only
- `src/core/config-merge.js`
- `src/core/platform.js`
- `src/core/viewport.js`
- `src/core/layout-handlers.js`
- `src/core/effect-lifecycle.js`
- `src/core/marquee-loop.js`
- `src/core/ui/overlay.js`
- `src/core/ui/controls.js`
- `src/core/afx_styles.css` — tuner/canvas/consent styles moved from inline

**Acceptance**

- Full init → agree → effect switch → destroy on simulator cards
- AnkiMobile tap: controls don’t flip card; empty overlay still flips after agree

## PR 5 — WebGL shared helpers (low–medium risk)

**Files**

- `src/core/webgl-utils.js` — fullscreen quad program only
- `src/effects/julia.js`, `src/effects/mandelbrot.js` — use helper; shaders unchanged

**Do not** refactor `lavalamp.js` or `gradient` lib in this PR.

## Merge order

`PR1 → PR2 → PR3 → PR4 → PR5` (or squash 1+2, then 3, 4, 5).

## Post-merge cleanup (optional)

- `src/effects/ecg-patterns.js` — extract waveform tables from `ecg.js`
- Lazy effect chunks (only if bundle size becomes a problem)
