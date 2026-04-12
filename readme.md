# AnkiFX 🪄

**A modular, high-performance visual rendering and audio engine for Anki flashcards.**

## 📖 Project Overview

AnkiFX solves a fundamental frustration with Anki template design: **native cards are boring**, and the official mobile apps (AnkiMobile/AnkiDroid) do not support the powerful visual add-ons available on desktop. While JavaScript can add flair, editing complex scripts directly within Anki's card browser is cumbersome and error-prone.

AnkiFX abstracts the entire visual layer into a standalone engine. Now, you can simply load the engine into any card type and enjoy a stunning, dynamic study environment. Your templates remain clean, merely loading a deck-specific **Configuration Payload** and the global **AnkiFX Engine**.

### Core Features
*   **Unified Canvas Architecture**: Uses a persistent, HDPi-compliant `WebGL` and `Canvas2D` context system. Background effects switch instantly without recreating the canvas or losing study focus.
*   **Dynamic Effect Registry**: Effects are auto-discovered during the build process and registered via an auto-generated `registry.js`. Adding a new effect is as simple as dropping a `.js` file into `src/effects/`.
*   **Viewport Tuner System**: A real-time layout debugger designed to solve iOS/AnkiMobile viewport height and offset issues. Adjust the `--tuner-height` dynamically to ensure edge-to-edge rendering behind Anki's native UI bars.
    *   **Debug Mode**: The tuner requires passing `{ debug: true }` to `AnkiFX.init()` and selecting the `Debug` effect in the UI.
*   **Canvas Visualizers**: Eleven high-performance background effects:
    *   *Aurora*: Organic, noise-based northern lights simulation (optimized for mobile).
    *   *Fire*: Classic demoscene doom-fire simulation.
    *   *Geometry*: 3D demoscene geometry + scrolling marquee.
    *   *Julia Set*: Animated fractal with a built-in **Preset Picker**.
    *   *Mandelbrot*: Zooming progressive fractal with tuning parameters.
    *   *Matrix*: Cyberpunk digital rain.
    *   *None*: A nightmode-aware, battery-efficient fallback.
    *   *Plasma*: Animated wave interference patterns.
    *   *Starfield*: Multi-layer parallax star field.
    *   *Tetris*: Fully functional background Tetris simulation.
    *   *Debug*: Diagnostic effect for viewport calibration.
*   **Keygen Jukebox (v2)**: Pure JavaScript tracker music player powered by [`funkymed-flod-module-player`](https://www.npmjs.com/package/funkymed-flod-module-player).
    *   **Effect-Music Association**: Effects can specify a `preferredTrack` to automatically switch to a thematically appropriate track.
    *   **Playback History**: 50-track stack with navigation (`⏮️` / `⏭️`) and async race protection.
*   **Modular Attribution Dialog**: A built-in modal for deck attribution and terms of service. It's strictly opt-in; if no `termsText` is provided in the config, the engine boots directly into effects.
*   **Mobile-First Design**: Optimized for AnkiMobile (iOS) and AnkiDroid:
    *   `e.stopPropagation()` on all UI interaction to prevent accidental card flips.
    *   Aggressive iOS Web Audio unlock patterns.
    *   HDPi/Retina scaling for crisp rendering on mobile screens.

---

## 🏗️ Architecture

The project is structured to separate core engine logic from visual effects and deck configurations.

### Directory Structure
```text
ankifx/
 ├─ src/
 │   ├─ core/
 │   │   ├─ engine.js             # Core AnkiFX class, DOM/Canvas management, Mobile logic
 │   │   ├─ jukebox.js            # Keygen Jukebox: fetch, decode, history traversal
 │   │   └─ afx_styles.css        # Centralized styling (bundled via esbuild)
 │   ├─ effects/
 │   │   ├─ registry.js           # 🤖 AUTO-GENERATED: Mapping of all effect modules
 │   │   ├─ marquee.js            # Shared engine-managed text ticker
 │   │   ├─ [effect_name].js      # Individual visual effects (Fire, Julia, etc.)
 │   │   └─ ...
 │   └─ index.js                  # Entry point, bundles to window.AnkiFX
 ├─ configs/
 │   ├─ _afx_example.js           # Publicly shared configuration template
 │   └─ _afx_*.js                 # [GIT-IGNORED] Your private deck configurations
 ├─ build/                        # Compiled "Anki Simulator" folder
 │   ├─ _ankifx.js                # Combined, minified engine + CSS
 │   └─ _afx_*.js                 # Synced config files
 ├─ build.js                      # esbuild pipeline with auto-registry & config sync
 └─ package.json
```

---

## 🛠️ Local Development & Build System

The project uses `esbuild` to bundle multiple JavaScript modules and CSS into a single `_ankifx.js` file suitable for Anki's flat directory structure.

### Running the Dev Environment
1.  Run `npm install`.
2.  Run `npm run watch` for a persistent build context that auto-rebuilds and refreshes the effect registry on save.
3.  Open `build/deck_description.html` or `build/card_front.html` via a local server (e.g., VS Code Live Server).

### Build Pipeline Features:
1.  **Auto-Registry**: Scans `src/effects/` and rebuilds `registry.js` automatically.
2.  **Config Sync**: Monitors `configs/` and copies all `_afx_*.js` files to the `build/` folder.
3.  **CSS Injection**: Styles from `afx_styles.css` are bundled as a text string and injected on engine initialization.

---

## 🎨 How to Build Your Own Effects

AnkiFX is designed for extensibility. To add a new visual effect:

1.  **Create a new file** in `src/effects/your_effect.js`.
2.  **Export an `effect` object** with the following interface:

```javascript
export const effect = {
    id: 'your_effect',         // Unique ID for the effect
    name: 'MY COOL EFFECT',    // Display name in the UI
    preferredTrack: 'track.mod', // Optional: Auto-switch jukebox to this track

    run(contexts, config) {
        // Entry point. 'contexts' provides shared access to:
        // - contexts.gl: WebGL context (afx-shared-gl)
        // - contexts.ctx2d: Canvas2D context (afx-shared-2d)
        // - contexts.width / contexts.height: Scaled dimensions
        // - contexts.dpr: Device Pixel Ratio
    },

    stop() {
        // Cleanup logic. Stop requestAnimationFrame loops here.
    },

    onResize(w, h, dpr) {
        // Optional: Handle layout changes (AnkiMobile orientation switch)
    }
};
```

3.  **Run the build**: The registry system will automatically detect your new file and include it in the `_ankifx.js` bundle. Switch to it instantly via the in-card effect picker.

---

## 🤖 Rules for LLMs and AI Assistants (READ CAREFULLY)

If you are an AI generating code for this project, you **must** adhere to these architectural constraints:

1.  **Styling**: Do not add CSS directly to `engine.js` or the Anki card templates. All project styling must live in `src/core/afx_styles.css`.
2.  **Registry Management**: Do not manually edit `src/effects/registry.js`. It is overwritten on every build/watch cycle by `build.js`.
3.  **Effect Interface**: All background effects must export a `run(contexts, config)` function and a `stop()` function. Use the provided shared contexts (`gl`, `ctx2d`, `width`, `height`, `dpr`) instead of creating new canvases.
4.  **Mobile Taps**: Ensure all injected UI elements call `e.stopPropagation()` on both `click` and `touchstart` events to prevent revealing card answers prematurely.
5.  **Viewport Tuning**: Use the Viewport Tuner (`debug` effect) to verify layout correctness on mobile. Respect the `--tuner-height` CSS variable for all full-screen layout logic.
6.  **Git Branching**: Always create a new feature branch (`feat/` or `fix/`) before starting work. Merge back to `main` only after verification.

---

## 🚀 Deployment to Anki

1.  Run `npm run build`.
2.  Copy `_ankifx.js` and your `_afx_[my_deck].js` config from `build/` to your Anki `collection.media` folder.
3.  Ensure your card template loads the config **before** the engine, and initializes the engine with desired options:
    ```html
    <script src="_afx_my_deck.js"></script>
    <script src="_ankifx.js"></script>
    <script>
      // Initialize with optional debug flag for viewport tuning
      AnkiFX.init({ 
        debug: false,      // Set to true to enable the Viewport Tuner
        countdown: 30      // Custom disclaimer countdown (seconds)
      });
    </script>
    ```