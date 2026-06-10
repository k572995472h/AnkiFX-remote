# Changelog

All notable changes to the AnkiFX project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] — feat/session-storage-persistence

### Added
- **MCQ Front Template — Dynamic Hints**: The `.afx-mcq-hint` element now dynamically shows question-type-specific instructions rather than a generic message:
  - Kprim (`0`): *"Kprim: Mark each statement True or False, then show the answer."*
  - Multiple Choice (`1`): *"Multiple Choice: Select all correct options, then show the answer."*
  - Single Choice (`2`): *"Single Choice: Select the one correct option, then show the answer."*
- **MCQ Front Template — Kprim True/False Buttons**: Interactive Kprim answer buttons now display **True** / **False** labels instead of Yes / No, consistent with standard Kprim terminology.
- **MCQ Front Template — Shuffle-Aware Letter Display**: When `ENABLE_SHUFFLE = true` the option letter indicators (A–E) and the correct-letters answer line on the back are hidden, as they no longer correspond to the rendered order. They are restored when shuffle is disabled.
- **MCQ Front Template — sessionStorage Persistence**: Card selection state is persisted across front→back flip using native `sessionStorage`, replacing the deprecated SimonLammer `anki-persistence` library. Selections survive the flip and are fully restored on the back template.
- **MCQ Back Template — `GRADING_COLOR_MODE` Variable**: A user-configurable constant controls how MC/SC options are coloured after grading:
  - `'all'` — Every row is coloured: correct rows green, incorrect rows red.
  - `'diff'` *(default)* — Only falsely selected rows (red) and correct options that were missed or correctly selected (green) are highlighted. Correctly ignored wrong options remain neutral.
- **MCQ Back Template — `CORRECTLY UNSELECTED ✓` Badge**: In `'all'` mode, options that were correctly left un-ticked now display the unambiguous badge *"CORRECTLY UNSELECTED ✓"* instead of the generic *"CORRECT ✓"*, making it clear the user correctly identified the option as false.
- **MCQ Templates — iOS Tap Handling**: Added `touchstart` + `e.preventDefault()` listeners to all interactive option elements so that tapping an option on AnkiMobile selects it without accidentally flipping the card.
- **MCQ Templates — Desktop Kprim Dotted Outlines**: Fixed missing dotted outline indicator on unselected Kprim options on desktop browsers.
- **MCQ Front Template — Graded Unselected Option Styling**: Unselected MC options are visually graded (slightly dimmed) on the front to reinforce multi-select affordance.
- **Loader — Progressive Enhancement**: Redesigned template loader around immediate content rendering. Card content is always shown first; AnkiFX engine enhancement is applied progressively once the engine loads, removing the black-screen flash during initial loading.

### Changed
- **Kprim Button Labels**: Yes / No renamed to **True** / **False** on both front (interactive) and back (graded, disabled) templates to match standard Kprim question conventions.
- **MCQ Back Default Grading Mode**: Default `GRADING_COLOR_MODE` changed from `'all'` to `'diff'` to reduce visual noise and align with standard exam feedback conventions.
- **Template Styling — Glassmorphism Redesign**: Card option containers replaced with frosted glass panels (`backdrop-filter: blur(12px)`) over the dynamic visual background. Text legibility enforced with `text-shadow` drop-shadows.
- **Template Styling — Dark/Light Mode Variables**: CSS variables unified under `--afx-mcq-` prefix with cohesive dark/light mode color system.
- **CDN Loader**: Templates now point to the stable `@v1` release branch on jsDelivr.

### Fixed
- **Text Legibility on Hover**: Hover state for options previously used a transparent overlay that made text unreadable on bright effect backgrounds; replaced with an opaque frosted glass background.
- **Text Legibility on Back Flip**: Back-flip gradient text colors were illegible on certain effect backgrounds; option text color is now locked to `--afx-mcq-text-primary`.
- **Button Appearance Override**: Native OS button appearance on Kprim buttons is now suppressed (`appearance: none`) to prevent iOS/macOS default light-mode white-background overrides.

## [1.0.0] - 2026-06-07

### Added
- **Unified Canvas Architecture**: Introduces persistent HDPi-compliant WebGL and Canvas2D rendering layers, enabling smooth transition between visual effects without context loss.
- **Dynamic Effect Registry**: Automated compiler system that auto-discovers and registers background visualizers at build time.
- **Auto-Calibrating Viewport Monitoring**: Dynamic offset sizing to guarantee pixel-perfect edge-to-edge backgrounds behind AnkiMobile's status bars (`--io-header` integration).
- **Thirteen Visualizer Effects**: Highly optimized, mobile-ready effects (Aurora, ECG with Arrhythmia modes, Doom Fire, 3D Geometry, Julia Set, Mandelbrot, Matrix, None, Stripe Gradient, Lavalamp WebGL, Starfield, Tetris, and Viewport Diagnostics).
- **Keygen Jukebox**: Pure JS Amiga/retro tracker music engine (`funkymed-flod-module-player`) featuring 50-track navigation history, preferred-track associations, and automatic completion transitions.
- **Attribution & Consent Overlay**: Standardized base64-encoded disclaimer overlays featuring a lock-out read timer.
- **Automatic Lifecycle Cleanup**: Observes DOM mutations and calls `destroy()` to release audio contexts and animation loops when navigating away from AnkiFX cards.
- **Template Update Checks**: Decentralized Meta Layer versioning manifest queries to alert users when a newer HTML template version is available.
- **GitHub Actions Integration**: Automated tag-driven release workflow containing build diff verification and release asset packaging.

### Fixed
- **DOM XSS Vulnerability**: Patched unsanitized manifest rendering in the update banner using a lightweight entity escape system.
- **Memory & Resource Leaks**: Resolved overlapping animation frame rendering loops on repeated initialization, event listeners remaining bound to window objects, and unreleased WebGL shader compile leaks.
- **Jukebox Intercepts & Overlaps**: Stopped completion intervals and audio streams prior to re-instantiating the audio context on card transitions.
- **Notice Banner Persistency**: Restored update notices and legacy template toast visibility during session restorations.
- **Build Output Contamination**: Implemented automatic cleanup of the `build/configs/` directory to wipe out stale override files.
- **Documentation Mismatch**: Aligned installation logs and CDN script URLs to target the stable `@v1` branch.
