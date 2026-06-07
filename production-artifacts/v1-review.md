# AnkiFX — Pre-v1.0.0 Codebase Review Report

This pre-release review of the `dev` branch of AnkiFX (`github.com/robkipa/ankifx`) identifies blockers, improvements, hygiene items, and documentation gaps that must be resolved before tagging version `v1.0.0`.

---

## Blockers (🔴)

### 1. Hardcoded CDN URL Points to `@dev` Branch
* **Reference**: [ankifx_mcq_front.html:L16](file:///Users/robertkipa/Projects/ankifx/build/card%20templates/ankifx_mcq_front.html#L16) & [ankifx_basic_front.html:L9](file:///Users/robertkipa/Projects/ankifx/build/card%20templates/ankifx_basic_front.html#L9)
* **Problem**: The CDN script URL is hardcoded to target the `@dev` branch on GitHub instead of the stable `@latest` or `@v1` tag.
* **Recommendation**: Update the `AnkiFX_CDN_URL` references in the front templates to use `@latest` or `@v1` so that production users load stable engine code.

### 2. Inconsistent Version Gating/Comparison Logic
* **Reference**: [index.js:L77-L86](file:///Users/robertkipa/Projects/ankifx/src/index.js#L77-L86) vs [ankifx_mcq_front.html:L90-L110](file:///Users/robertkipa/Projects/ankifx/build/card%20templates/ankifx_mcq_front.html#L90-L110)
* **Problem**: The template loader uses a robust version comparator that handles pre-releases (`alpha`, `beta`, `rc`), but the runtime bundle's takeover logic in `index.js` (`isNewerVersion`) strips everything after the hyphen, causing it to incorrectly ignore upgrades from beta/RC versions to stable versions.
* **Recommendation**: Port the semantic version parsing and comparison logic from the templates into the bundle's `index.js` loader.

---

## Should Fix Before v1 (🟡)

### 1. Layout Thrashing in `aurora.js` and `debug.js` Render Loops
* **Reference**: [aurora.js:L294-L295](file:///Users/robertkipa/Projects/ankifx/src/effects/aurora.js#L294-L295) & [debug.js:L350-L354](file:///Users/robertkipa/Projects/ankifx/src/effects/debug.js#L350-L354)
* **Problem**: Calling `getComputedStyle` inside a 60fps render loop to read `--io-header` forces the browser to perform synchronous layout recalculation, leading to severe layout thrashing and frame drops.
* **Recommendation**: Read layout metrics only inside the `onResize` handlers or cache them in module variables, and avoid querying `getComputedStyle` inside render loops.

### 2. UI Thread Freezes during Procedural Texture Generation
* **Reference**: [starfield.js:L130-L167](file:///Users/robertkipa/Projects/ankifx/src/effects/starfield.js#L130-L167)
* **Problem**: Generating a 256x256 procedural planet texture via 65,536 iterations of fractal Brownian motion (fBm) noise on the main thread when a planet resets causes a noticeable freeze (stutter) on mobile devices.
* **Recommendation**: Pre-generate/bake planet textures at startup or resize and store them, or generate the texture incrementally over multiple frames to keep the frame rate stable.

### 3. ECG Panel DOM Churn via `innerHTML` Writes on Every Frame
* **Reference**: [ecg.js:L278-L281](file:///Users/robertkipa/Projects/ankifx/src/effects/ecg.js#L278-L281)
* **Problem**: The ECG effect writes to `innerHTML` of the ECG status panel on every single frame, causing unnecessary DOM tree parsing and rendering overhead since the BPM and rhythm values only change once a second or on rhythm transition.
* **Recommendation**: Cache the last rendered values and only update `innerHTML` when the rhythm or the BPM text actually changes.

### 4. Excessive Canvas State Changes inside Marquee Loop
* **Reference**: [marquee.js:L91-L107](file:///Users/robertkipa/Projects/ankifx/src/effects/marquee.js#L91-L107)
* **Problem**: Setting and resetting `ctx.shadowColor` and `ctx.shadowBlur` inside the loop for every single character causes heavy canvas context state updates.
* **Recommendation**: Apply the shadow properties once outside the character loop, and only modify them inside the loop if the shadow color is `'inherit'` and changes per-character.

### 5. Missing Package Metadata in `package.json`
* **Reference**: [package.json:L1-L20](file:///Users/robertkipa/Projects/ankifx/package.json#L1-L20)
* **Problem**: `package.json` is missing standard metadata fields like `"license"`, `"repository"`, `"bugs"`, and `"keywords"`.
* **Recommendation**: Add the missing metadata fields to match professional release standards.

---

## Nice to Have / Post-v1 Issues (🟢)

### 1. Build Configs Directory is Never Cleaned
* **Reference**: [build.js:L121-L126](file:///Users/robertkipa/Projects/ankifx/build.js#L121-L126)
* **Problem**: `build.js` does not clean `build/configs/` before merging configurations, leaving stale, renamed, or deleted configs lingering in the final build directory.
* **Recommendation**: Add a cleaning step in `build.js` to clear `build/configs/` before compiling.

### 2. Excessive Star Count in Starfield Effect
* **Reference**: [starfield.js:L29](file:///Users/robertkipa/Projects/ankifx/src/effects/starfield.js#L29)
* **Problem**: Drawing 8,000 stars on the main thread via Canvas2D causes heavy rendering workloads and will degrade performance on lower-end mobile WebViews.
* **Recommendation**: Reduce the star count limit to a lower value (e.g., 800 - 1,500 stars) for mobile performance safety.

### 3. Log Prefix Inconsistency in HTML Templates
* **Reference**: [ankifx_mcq_front.html:L371-L373](file:///Users/robertkipa/Projects/ankifx/build/card%20templates/ankifx_mcq_front.html#L371-L373) & [ankifx_basic_front.html:L370-L372](file:///Users/robertkipa/Projects/ankifx/build/card%20templates/ankifx_basic_front.html#L370-L372)
* **Problem**: The templates specify `afxLog(msg, level)` but do not prepend `"[Card Template] "` as defined in the bracketed subsystem prefix rules in `.cursorrules`.
* **Recommendation**: Modify the `afxLog` definition in the templates to automatically prepend the prefix.

---

## Dead Code / Files to Remove

### 1. Stale Config File `_afx_immunology.json` in Build Directory
* **Reference**: [build/configs/_afx_immunology.json](file:///Users/robertkipa/Projects/ankifx/build/configs/_afx_immunology.json)
* **Problem**: This file has no matching source configuration in `configs/` and is a leftover artifact from previous naming conventions (replaces `_afx_immunology_final_2024.json`).
* **Recommendation**: Delete the stale `build/configs/_afx_immunology.json` file.

---

## Documentation Gaps

### 1. Missing `CHANGELOG.md`
* **Reference**: Root Directory
* **Problem**: No changelog exists to document features, modifications, and bug fixes since initial development.
* **Recommendation**: Create `CHANGELOG.md` in the root directory prior to tagging `v1.0.0`.

### 2. Missing `CONTRIBUTING.md`
* **Reference**: Root Directory
* **Problem**: No contribution guidelines are defined for authors wishing to submit PRs, commit messages (Conventional Commits), or write custom effects.
* **Recommendation**: Add a `CONTRIBUTING.md` file or create a dedicated section inside the `README.md`.

---

## Open Questions

1. **Atrial Fibrillation baseline wave simulation**: Is the high-frequency sine combination in `getAFibBaseline` too chaotic or does it look realistic enough for clinical card templates?
2. **CC0 License coverage of jukebox music streams**: Since the Keygen Jukebox pulls files from a third-party GitHub tracker collection, does the CC0 license for AnkiFX cover potential licensing implications of streaming retro tracker module music?

---

# Go / No-Go Recommendation

### **Recommendation: NO-GO 🛑**

**Reasoning**: 
Release `v1.0.0` is blocked by the **CDN URL pointing to the unstable `@dev` branch** (which will cause production cards to fetch unstable development updates post-release) and the **inconsistent version gating** (where pre-release-to-stable and beta-to-beta upgrades will fail to trigger takeover and will be ignored by `index.js`). 

Once the two Blockers (🔴) are resolved, and the layout thrashing/DOM churn issues (🟡) are addressed, the repository will be ready for a stable public launch.