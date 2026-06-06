# AnkiFX Pre-Release Codebase Review: Release Readiness Audit (v1.0.0)

This document presents a comprehensive pre-release review of the AnkiFX codebase, documentation, build system, and developer experience. The audit assumes the project is preparing for its first public `v1.0.0` release.

---

## 1. Executive Summary

AnkiFX is a highly polished, visually stunning, and functionally rich visual engine. By integrating complex animations (WebGL, Canvas2D) and retro audio processing into a lightweight, persistent context system, it successfully bypasses native Anki WebView limitations. 

The codebase exhibits modern modular standards, utilizing an automated build-time effects registry and robust viewport height calculations suited for Anki's custom iOS and Android wrappers. The test suite provides automated build and schema smoke tests.

However, several **critical race conditions, memory leaks, and configuration mismatches** must be resolved before tagging the `v1.0.0` release to guarantee long-term stability and prevent user experience degradation (such as locked scripts, frozen text animation, BGM leaks, and browser crashes).

---

## 2. Pre-v1 Action List

These high-leverage improvements should be addressed before tagging the first public `v1.0.0` release.

### 2.1. Late CDN Load Overwrites Active Instance and Freezes UI (Architecture / Reliability)
* **Issue**: In the hybrid deployment model, a local backup script loads synchronously, and the remote CDN loads asynchronously. If the remote script takes longer than 800ms, the loader initializes the local engine (`AnkiFX.init()`). When the remote script finishes later, it overwrites `window.AnkiFX = AnkiFX`. Since `ankiFXInitialized` is already true, the loader does not initialize the remote instance. When the user flips the card, the back template calls `AnkiFX.init()` on the **uninitialized remote instance** (since it is the current `window.AnkiFX`). This instance's internal `state` is empty. The init method restores the agreed session via `tryRestoreAgreedSession` (because the overlay exists) and exits early, but since `state.marquee` is null on the remote instance, the marquee text animation loop freezes and fails to receive updates.
* **Why it matters**: It breaks the main aesthetic feature (marquee loop freezes) on slow connections and causes silent split-state bugs where configuration updates are ignored.
* **Impact**: High | **Effort**: Small
* **Concrete Solution**: Expose an `initialized` getter on `AnkiFX` (bound to `state.initialized`). In `src/index.js`, check if `window.AnkiFX && window.AnkiFX.initialized`. If true, do not overwrite the global reference. Warn and exit early:
  ```javascript
  const isLate = window.AnkiFX && window.AnkiFX.initialized;
  if (isLate) {
      console.warn(`[AnkiFX Loader] Late engine evaluation ignored. An active engine (Source: ${window.AnkiFX.source}) is already running.`);
  } else {
      window.AnkiFX = AnkiFX;
  }
  ```

### 2.2. Audio Continues Playing After BGM is Toggled Off (Audio Race Condition)
* **Issue**: When a user enables BGM, the `Jukebox` asynchronously fetches and decodes the audio track. If the user turns BGM OFF before the network fetch completes, `state.jukebox.stop()` is called. However, `stop()` does not increment `this._opId` or cancel the pending promise. When the fetch resolves, `_playTrack` checks `opId === this._opId`. Since the ID has not changed, it decodes the track and starts playing it, resulting in active audio playback despite BGM being toggled off in the UI.
* **Why it matters**: It ruins audio control and irritates users when music unexpectedly plays after they requested silence.
* **Impact**: High | **Effort**: Small
* **Concrete Solution**: 
  1. Increment `this._opId` inside the `stop()` method of `src/core/jukebox.js` to immediately invalidate all pending async chains.
  2. Add a check for `this.isPlaying` inside the async callback of `_playTrack` before calling `this.currentPlayer.play()`.

### 2.3. Opt-in Terms Modal Forces Definition of termsText (Build & Schema Failure)
* **Issue**: The documentation states that the terms disclaimer is strictly opt-in. However, `validateConfig` in `scripts/validate-config.js` lists `termsText` in its `required` fields. If a developer omits it from a custom config, the build fails. Furthermore, `DEFAULT_CONFIG` in `src/core/config-merge.js` defaults it to `"No terms provided."`, which causes the terms modal to display with a fallback message rather than booting directly into effects.
* **Why it matters**: Contradicts the documentation, breaks local builds for users who want to opt out, and forces developers to define empty properties.
* **Impact**: Medium | **Effort**: Small
* **Concrete Solution**:
  1. Remove `termsText` from the `required` fields array in `scripts/validate-config.js`.
  2. Set the default `termsText` value in `DEFAULT_CONFIG` (in `src/core/config-merge.js`) to `""` or `null`.
  3. Ensure `overlay.js` skips rendering the modal if `termsText` is falsy or empty.

### 2.4. WebGL Program & Buffer Leak in Fractal Effects (Performance / Memory)
* **Issue**: In `julia.js` and `mandelbrot.js`, `run()` compiles shaders, creates a WebGL program, and binds a new buffer using `createFullscreenProgram()`. When the effects are stopped, they cancel the animation frame but **never delete the WebGL program or buffer**. Since the WebGL context is persistent (`state.glContext`), switching back and forth between these effects leaks WebGL programs and buffers in GPU memory.
* **Why it matters**: Repetitive compilation and allocation without deletion can exhaust GPU resources, causing WebGL context loss or app crashes during long study sessions.
* **Impact**: High | **Effort**: Small
* **Concrete Solution**: Store reference to the compiled `program` and `buffer` in file-level variables in `src/effects/julia.js` and `src/effects/mandelbrot.js`, and invoke `gl.deleteProgram(program)` and `gl.deleteBuffer(buffer)` in their respective `stop()` methods (following the clean resource release pattern implemented in `lavalamp.js`).

### 2.5. Outdated Card Template Paths in README (Developer Experience)
* **Issue**: The `readme.md` instructs developers to open `build/card_front_example.html` or `build/card_back_example.html` directly in their browser for live preview. However, these files are located under the untracked subfolder `build/card templates/` (e.g. `build/card templates/card_front_example.html`).
* **Why it matters**: Causes immediate confusion and broken link errors for developers setting up the workspace for the first time.
* **Impact**: Medium | **Effort**: Small
* **Concrete Solution**: Update the file paths in the `readme.md` to reference `build/card templates/card_front_example.html` and `build/card templates/card_back_example.html` correctly.

### 2.6. README Loader Template Mismatch (Documentation Quality)
* **Issue**: The loader script template provided in the `readme.md` uses `window.AnkiFX_Loader_Logs.push("...")` with raw strings. This directly violates the logging standards configured in `.cursorrules` (which mandate the `afxLog(msg, level)` helper pushing structured `{ msg, level }` objects).
* **Why it matters**: Users who copy the loader script from the README will have unformatted raw logs in their debug dashboard, losing colored log level icons and status indications.
* **Impact**: Medium | **Effort**: Small
* **Concrete Solution**: Update the loader script template in `readme.md` to define and call `afxLog(msg, level)`, aligning it with the actual HTML files in `build/card templates/`.

---

## 3. Post-v1 Improvements

These valuable improvements enhance readability, testability, and developer experience but do not block the release.

### 3.1. Clean Release Version Strings in Build Script
* **Issue**: The build script currently appends the git commit hash (e.g. `1.0.0-4a8f902`) to the version string. While excellent for development, release bundles should support a clean semantic version string (e.g. `1.0.0`) when built for release.
* **Impact**: Low | **Effort**: Small
* **Concrete Solution**: Add a `--release` flag to `build.js` that disables appending the git commit hash to the version, providing clean semver outputs for official release assets.

### 3.2. Core Unit Tests
* **Issue**: There are currently no unit tests covering core utility business logic, such as `config-merge.js` (merging defaults, config hardening) or `jukebox.js` (history stack size limits, track parsing).
* **Why it matters**: Increases regression risks as the core engine scales or shifts configurations in future updates.
* **Impact**: Medium | **Effort**: Medium
* **Concrete Solution**: Write unit tests using the native Node.js test runner (e.g. `tests/config-merge.test.js`) to validate configuration parsing and track-switching logic under different environments.

### 3.3. Prevent Residual Listener Accumulation in Debug Mode
* **Issue**: The debug panel in `src/effects/debug.js` intercepts global console methods and attaches window error/unhandledrejection listeners. These listeners are never removed when the debug effect stops, leaving them registered on the window.
* **Why it matters**: Represents a small memory leak. While mostly harmless since the listeners return early when debug is disabled, it represents unclean cleanup.
* **Impact**: Low | **Effort**: Small
* **Concrete Solution**: Keep references to the bound listener functions and remove them using `window.removeEventListener` in `stopDebug()`.

---

## 4. Overengineering Warnings

The following potential refactors were evaluated but are **explicitly rejected** as unnecessary for the project's scope:

* **State Management Libraries**: Introducing Redux, Zustand, or custom state machines for engine state. The current module-scoped singleton object `state` in `engine.js` is simple, fast, and sufficient.
* **WebGL Shaders in Separate Files**: Loading shaders via `.glsl` files with custom loader loaders. The current layout of keeping shader source strings inside their respective effect JS files keeps bundling fast and prevents WKWebView file loading quirks.
* **Dependency Injection Containers**: Creating complex dependency containers to supply contexts. Sticking to passing the standard `contexts` object during `run()` is lightweight and easily understood by third-party effect authors.

---

## 5. Release Verdict

### Verdict: **Ready for v1 with minor fixes**

If the **Pre-v1 Action List** is completed, the codebase will be fully reliable, leak-free, and correctly aligned with the documentation, making it ready for a high-quality, stable public release.
