// ============================================================
//  SACRED GEOMETRY ENGINE  — unified multi-mode 2D canvas
//  Four expressions of one underlying mathematical system.
// ============================================================

let animationId = null;
let currentW, currentH;

let mode = parseInt(localStorage.getItem('ankifx_geometry_mode') || '0', 10);
const MODES = ['unity', 'light', 'flow', 'fractal'];
if (isNaN(mode) || mode < 0 || mode >= MODES.length) mode = 0;

// ── Flow particle pool (pre-allocated, reused every spawn) ──
const PARTICLE_COUNT = 140;
const pX     = new Float32Array(PARTICLE_COUNT);
const pY     = new Float32Array(PARTICLE_COUNT);
const pPrevX = new Float32Array(PARTICLE_COUNT);
const pPrevY = new Float32Array(PARTICLE_COUNT);
const pLife  = new Float32Array(PARTICLE_COUNT);
const pSpeed = new Float32Array(PARTICLE_COUNT);
const pAngle = new Float32Array(PARTICLE_COUNT);  // directional memory
const pHueOffset = new Float32Array(PARTICLE_COUNT); // per-particle hue bias
let particlesInit = false;

// ── Light mode: offscreen accumulation for burn glow ──
let accumCanvas = null;
let accumCtx    = null;
let accumW = 0, accumH = 0;

// ── Global breathing / temporal state ──
let globalBreath = 0;   // updated once per frame, shared across all modes

// ============================================================
//  SHARED MATHEMATICAL DNA
// ============================================================

/**
 * Single global hue base drifting over time (very slowly).
 * All modes sample from this and apply their own offset / transform.
 * Drifts through gold → turquoise → indigo cycle.
 */
function getGlobalHueBase(time) {
    // Period ≈ 60 s through the three anchor hues
    return 45 + 175 * (0.5 - 0.5 * Math.cos(time * 0.035));
}

/**
 * Sacred palette — every mode calls this instead of hardcoding hues.
 * @param {number} time
 * @param {number} hueShift   per-mode offset (e.g. 0 unity, +90 fractal)
 * @param {number} intensity  [0..1], maps to saturation / brightness envelope
 * @param {number} alpha
 * @returns {string} hsla color string
 */
function getSacredPalette(time, hueShift, intensity, alpha) {
    const base = getGlobalHueBase(time);
    const hue  = (base + hueShift) % 360;
    const sat  = 80 + intensity * 18;          // 80–98 %
    const lit  = 45 + intensity * 25;          // 45–70 %
    return `hsla(${hue.toFixed(1)}, ${sat.toFixed(0)}%, ${lit.toFixed(0)}%, ${alpha.toFixed(3)})`;
}

/**
 * Unified breathing scale — slow, sine-based, amplitude small.
 * @param {number} time
 * @param {number} modePhase  mode-specific phase offset for variety
 * @returns {number} scale modifier centered on 1.0
 */
function getBreathingScale(time, modePhase) {
    return 1.0 + 0.032 * Math.sin(time * 0.38 + modePhase);
}

/**
 * Symmetry factor — rhythmic pulse driving fold/rotation variation.
 * @param {number} time
 * @param {number} modePhase
 * @returns {number} [0..1]
 */
function getSymmetryFactor(time, modePhase) {
    return 0.5 + 0.5 * Math.sin(time * 0.22 + modePhase);
}

// ============================================================
//  EFFECT EXPORT
// ============================================================

export const effect = {
    id: 'geometry',
    name: 'Geometry',
    run: runGeometry,
    stop: stopGeometry,
    onResize: (w, h) => {
        currentW = w;
        currentH = h;
        resetAccumBuffer();
    },
    controls: [
        {
            type: 'button',
            id: 'geometry-mode-switch',
            label: getModeLabel(mode),
            onClick: () => cycleMode()
        }
    ],
    marqueeFont: {
        colorFn: (time, i) => {
            // Follows the same global hue base — zero independent hue logic
            const hue = getGlobalHueBase(time * 0.016) + i * 2.5;
            return `hsl(${hue % 360}, 95%, 65%)`;
        },
        shadowColor: 'rgba(255, 215, 0, 0.35)',
        shadowBlur: 14
    }
};

export function cycleMode() {
    mode = (mode + 1) % MODES.length;
    localStorage.setItem('ankifx_geometry_mode', mode);
    if (effect.controls?.[0]) {
        effect.controls[0].label = getModeLabel(mode);
        if (typeof AnkiFX !== 'undefined' && AnkiFX.renderEffectControls) {
            AnkiFX.renderEffectControls(effect);
        }
    }
    resetAccumBuffer();
}

function getModeLabel(m) {
    switch (MODES[m]) {
        case 'unity':   return '👁️ UNITY MODE';
        case 'light':   return '✨ LIGHT MODE';
        case 'flow':    return '🌊 FLOW MODE';
        case 'fractal': return '❄️ FRACTAL MOSAIC';
        default:        return '👁️ MODE';
    }
}

// ============================================================
//  PARTICLE POOL MANAGEMENT
// ============================================================

function initParticles() {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        spawnParticle(i, true);
    }
    particlesInit = true;
}

function spawnParticle(i, randomAge) {
    const a = Math.random() * Math.PI * 2;
    const d = Math.random() * 0.18;
    pX[i] = 0.5 + Math.cos(a) * d;
    pY[i] = 0.5 + Math.sin(a) * d;
    pPrevX[i] = pX[i] * (currentW || 400);
    pPrevY[i] = pY[i] * (currentH || 800);
    pLife[i] = randomAge ? Math.random() : (0.55 + Math.random() * 0.45);
    pSpeed[i] = 0.0009 + Math.random() * 0.0016;
    pAngle[i] = Math.random() * Math.PI * 2;
    pHueOffset[i] = (Math.random() < 0.4 ? 0 : (Math.random() < 0.65 ? 135 : 175)); // gold / turquoise / indigo offset
}

// ============================================================
//  ACCUMULATION BUFFER (Light mode burn)
// ============================================================

function resetAccumBuffer() {
    if (!accumCanvas) {
        accumCanvas = document.createElement('canvas');
        accumCtx = accumCanvas.getContext('2d');
    }
    accumCanvas.width  = Math.floor((currentW || 400) / 4);
    accumCanvas.height = Math.floor((currentH || 800) / 4);
    accumW = accumCanvas.width;
    accumH = accumCanvas.height;
    accumCtx.clearRect(0, 0, accumW, accumH);
}

// ============================================================
//  MAIN RENDER LOOP
// ============================================================

export function runGeometry(contexts, config) {
    const ctx = contexts.ctx2d;
    currentW = contexts.width;
    currentH = contexts.height;
    let time = 0;

    if (effect.controls?.[0]) effect.controls[0].label = getModeLabel(mode);
    if (!particlesInit) initParticles();
    resetAccumBuffer();

    function render() {
        time += 0.012;

        // ── Global breathing field (applied to entire canvas space) ──
        const breath = getBreathingScale(time, 0);
        globalBreath = breath;

        ctx.globalCompositeOperation = 'source-over';

        // Mode-specific trail persistence
        const bgAlpha = MODES[mode] === 'unity'   ? 0.20
                      : MODES[mode] === 'light'   ? 0.13
                      : MODES[mode] === 'flow'    ? 0.07
                      :                             0.26;
        ctx.fillStyle = `rgba(2, 2, 8, ${bgAlpha})`;
        ctx.fillRect(0, 0, currentW, currentH);

        const cx = currentW  / 2;
        const cy = currentH / 2;
        const maxRadius = Math.max(currentW, currentH) * 0.85;

        // ── Global coordinate breathing: very slight scale of drawing origin ──
        // Applied inside each sub-renderer via getBreathingScale rather than ctx.scale
        // to avoid affecting the full clear and vignette passes.

        ctx.globalCompositeOperation = 'lighter';

        // ── Unified center core glow ──
        renderCoreGlow(ctx, cx, cy, time);

        // ── Mode dispatch ──
        switch (MODES[mode]) {
            case 'unity':   renderUnity(time, ctx, cx, cy, maxRadius);   break;
            case 'light':   renderLight(time, ctx, cx, cy, maxRadius);   break;
            case 'flow':    renderFlow (time, ctx, cx, cy, maxRadius);   break;
            case 'fractal': renderFractal(time, ctx, cx, cy, maxRadius); break;
        }

        // ── Soft radial vignette (source-over so it darkens, not adds) ──
        ctx.globalCompositeOperation = 'source-over';
        const vig = ctx.createRadialGradient(cx, cy, maxRadius * 0.3, cx, cy, maxRadius * 1.1);
        vig.addColorStop(0, 'rgba(0,0,0,0)');
        vig.addColorStop(1, 'rgba(2,2,8,0.72)');
        ctx.fillStyle = vig;
        ctx.fillRect(0, 0, currentW, currentH);

        animationId = requestAnimationFrame(render);
    }
    animationId = requestAnimationFrame(render);
}

export function stopGeometry() {
    if (animationId) { cancelAnimationFrame(animationId); animationId = null; }
    particlesInit = false;
    accumCtx?.clearRect(0, 0, accumW, accumH);
}

// ============================================================
//  UNIFIED CENTER CORE GLOW
// ============================================================

function renderCoreGlow(ctx, cx, cy, time) {
    const symFactor  = getSymmetryFactor(time, 0);
    const breath     = globalBreath;
    const intensity  = 0.5 + 0.5 * symFactor;

    // Radius varies subtly by mode and by breathing
    const modeRadiusBoost = MODES[mode] === 'light' ? 1.7 : 1.0;
    const r = (28 + 16 * symFactor) * breath * modeRadiusBoost;

    // Color from shared palette, each mode has a small hue shift
    const modeHueShift = MODES[mode] === 'unity' ? 0 : MODES[mode] === 'light' ? -25 : MODES[mode] === 'flow' ? 135 : 90;
    const baseHue = (getGlobalHueBase(time) + modeHueShift) % 360;
    const baseAlpha = MODES[mode] === 'light' ? 0.55 : 0.28;

    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 2.2);
    g.addColorStop(0,   `hsla(${baseHue}, 95%, 82%, ${(baseAlpha * intensity).toFixed(3)})`);
    g.addColorStop(0.4, `hsla(${baseHue}, 85%, 60%, ${(baseAlpha * 0.4).toFixed(3)})`);
    g.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 2.5, 0, Math.PI * 2);
    ctx.fill();
}

// ============================================================
//  MODE 1 — UNITY  (kaleidoscopic angular folding)
// ============================================================

function renderUnity(time, ctx, cx, cy, maxRadius) {
    const NUM_FOLDS_SET = [8, 10, 12];
    const breath   = getBreathingScale(time, 0.8);
    const symFact  = getSymmetryFactor(time, 0.0);

    // One continuous infinite object: logarithmic zoom illusion
    // via continuous polar angular-folded sectors
    const numShells = 7;
    const zoomSpeed = 0.10;
    const zoomT     = (time * zoomSpeed) % 1.0;

    ctx.save();
    ctx.translate(cx, cy);

    for (let i = 0; i < numShells; i++) {
        // Fractional shell position for smooth infinite zoom feel
        const t = (i - zoomT + numShells) % numShells;
        const scale = Math.pow(2.0, t - 2.5) * breath; // exponential depth mapping
        const radius = scale * 58;

        if (radius > maxRadius * 1.4 || radius < 1.5) continue;

        // Fade in/out at boundaries to hide pop-in
        let alpha = 1.0;
        if (t < 1.0) alpha = t;
        else if (t > numShells - 1.4) alpha = (numShells - t) / 1.4;
        alpha = Math.max(0, Math.min(1, alpha)) * 0.62;

        const folds     = NUM_FOLDS_SET[i % 3];           // 8 / 10 / 12
        const hueShift  = (i * 45 + symFact * 60) % 360;  // phase drift per sector
        const rotDir    = i % 2 === 0 ? 1 : -1;
        // Slight rotational warp over time — each shell has its own phase
        const rot       = time * 0.025 * rotDir + i * 0.31 + symFact * 0.18;

        ctx.save();
        ctx.rotate(rot);
        drawUnityPolygon(ctx, radius, folds, alpha, hueShift, time);
        ctx.restore();
    }

    ctx.restore();
}

function drawUnityPolygon(ctx, r, folds, alpha, hueShift, time) {
    // Star connections: skip-connect to create interlaced geometry
    const skip = folds === 8 ? 3 : folds === 10 ? 3 : 5;
    ctx.beginPath();
    for (let j = 0; j < folds; j++) {
        const a1 = (j / folds) * Math.PI * 2;
        const a2 = ((j + skip) % folds / folds) * Math.PI * 2;
        ctx.moveTo(Math.cos(a1) * r, Math.sin(a1) * r);
        ctx.lineTo(Math.cos(a2) * r, Math.sin(a2) * r);
    }
    // Radial spokes from center — emphasise single origin
    for (let j = 0; j < folds; j++) {
        const a = (j / folds) * Math.PI * 2;
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.lineWidth = 1.1;
    ctx.strokeStyle = getSacredPalette(time, hueShift, alpha, alpha * 0.9);
    ctx.stroke();
}

// ============================================================
//  MODE 2 — LIGHT  (radiance propagation + intersection memory)
// ============================================================

function renderLight(time, ctx, cx, cy, maxRadius) {
    const breath  = getBreathingScale(time, 1.6);
    const symFact = getSymmetryFactor(time, 0.5);

    // ── Primary + 3 orbiting sources ──
    drawLightSource(ctx, cx, cy, time, 1.0, maxRadius, breath, symFact, 0);
    const orbitCount = 3;
    for (let i = 0; i < orbitCount; i++) {
        const orbitAngle = time * 0.55 + (i * Math.PI * 2) / orbitCount;
        const orbitDist  = (0.12 + 0.08 * symFact) * maxRadius * breath;
        const ox = cx + Math.cos(orbitAngle) * orbitDist;
        const oy = cy + Math.sin(orbitAngle) * orbitDist;
        drawLightSource(ctx, ox, oy, time + i * 0.38, 0.42, maxRadius, breath, symFact, i + 1);
    }

    // ── Intersection burn accumulation ──
    // Each frame we stamp a soft glow at each source pair midpoint into accumCanvas
    ctx.globalCompositeOperation = 'source-over';
    accumCtx.fillStyle = 'rgba(0,0,0,0.04)';   // slow decay of burn memory
    accumCtx.fillRect(0, 0, accumW, accumH);

    const scaleW = accumW / currentW;
    const scaleH = accumH / currentH;

    for (let i = 0; i < orbitCount; i++) {
        const oa = time * 0.55 + (i * Math.PI * 2) / orbitCount;
        const od = (0.12 + 0.08 * symFact) * maxRadius * breath;
        const ox = cx + Math.cos(oa) * od;
        const oy = cy + Math.sin(oa) * od;
        // Midpoint between primary and orbiter = intersection zone
        const mx = (cx + ox) / 2 * scaleW;
        const my = (cy + oy) / 2 * scaleH;
        const burnHue = (getGlobalHueBase(time) + i * 30) % 360;
        const gBurn = accumCtx.createRadialGradient(mx, my, 0, mx, my, 18);
        gBurn.addColorStop(0, `hsla(${burnHue}, 95%, 85%, 0.22)`);
        gBurn.addColorStop(1, 'rgba(0,0,0,0)');
        accumCtx.globalCompositeOperation = 'lighter';
        accumCtx.fillStyle = gBurn;
        accumCtx.beginPath();
        accumCtx.arc(mx, my, 18, 0, Math.PI * 2);
        accumCtx.fill();
    }

    // Draw accumulation buffer onto main canvas (upscaled, blurred by GPU bilinear)
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = 0.55;
    ctx.drawImage(accumCanvas, 0, 0, currentW, currentH);
    ctx.globalAlpha = 1.0;
}

function drawLightSource(ctx, x, y, time, weight, maxRadius, breath, symFact, idx) {
    const numRings = 5;
    const ringSpeed = 0.16;
    const rays = 8 + idx * 2;  // more rays on orbiting sources for variation

    for (let j = 0; j < numRings; j++) {
        const progress = ((j / numRings) + time * ringSpeed) % 1.0;
        const r = progress * maxRadius * 0.80 * breath;
        const alpha = Math.sin(progress * Math.PI) * 0.42 * weight;
        if (alpha <= 0.005) continue;

        const hueShift  = progress * 160 + idx * 25;  // transform, not replace
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.strokeStyle = getSacredPalette(time, hueShift, 1.0 - progress * 0.4, alpha);
        ctx.lineWidth = 1.4 + (1.0 - progress) * 5.5;
        ctx.stroke();

        // Ray spokes at each ring — highlight structure
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(time * 0.06 + idx * 0.7);
        ctx.beginPath();
        for (let rr = 0; rr < rays; rr++) {
            const a = (rr / rays) * Math.PI * 2;
            ctx.moveTo(Math.cos(a) * (r * 0.84), Math.sin(a) * (r * 0.84));
            ctx.lineTo(Math.cos(a) * r,           Math.sin(a) * r);
        }
        ctx.strokeStyle = getSacredPalette(time, hueShift + 30, 0.9, alpha * 0.22);
        ctx.lineWidth = 0.9;
        ctx.stroke();
        ctx.restore();
    }
}

// ============================================================
//  MODE 3 — FLOW  (structured vector field + directional memory)
// ============================================================

function renderFlow(time, ctx, cx, cy, maxRadius) {
    if (!particlesInit) initParticles();

    const W = currentW, H = currentH;
    const invW = 1 / W, invH = 1 / H;
    const breath = getBreathingScale(time, 2.4);
    const symFact = getSymmetryFactor(time, 1.2);

    // Spiral attractor rotates slowly
    const attractAngle = time * 0.18;
    const attractStr   = 0.0004 + 0.0003 * symFact;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const px = pX[i] * W;
        const py = pY[i] * H;
        pPrevX[i] = px;
        pPrevY[i] = py;

        // ── Structured vector field: radial + tangential + sinusoidal perturbation ──
        const dx = pX[i] - 0.5;
        const dy = pY[i] - 0.5;
        const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
        const nx = dx / dist, ny = dy / dist; // unit radial
        const tx = -ny, ty = nx;              // unit tangential

        // Field angle: radial pull + tangential orbit + sinusoidal perturbation
        const fx = pX[i] * 3.2;
        const fy = pY[i] * 3.2;
        const perturbation = Math.sin(fx + time * 0.35) * Math.cos(fy - time * 0.2) * 0.55;

        // Directional memory: blend current field direction with stored angle (smoothing)
        const targetAngle = Math.atan2(
            ty * 0.65 + ny * (-0.2) + Math.sin(perturbation * Math.PI) * 0.35,
            tx * 0.65 + nx * (-0.2) + Math.cos(perturbation * Math.PI) * 0.35
        );
        // Exponential angle smoothing — avoids jitter
        const angleDiff = targetAngle - pAngle[i];
        const wrapped = angleDiff - Math.round(angleDiff / (Math.PI * 2)) * Math.PI * 2;
        pAngle[i] += wrapped * 0.12;

        // Weak center spiral attraction
        pX[i] += (Math.cos(pAngle[i]) * pSpeed[i]
                  - nx * attractStr * (dist > 0.1 ? 1 : -1)) ;
        pY[i] += (Math.sin(pAngle[i]) * pSpeed[i]
                  - ny * attractStr * (dist > 0.1 ? 1 : -1));
        pLife[i] -= 0.0016;

        if (pX[i] < 0 || pX[i] > 1 || pY[i] < 0 || pY[i] > 1 || pLife[i] <= 0) {
            spawnParticle(i, false);
            continue;
        }

        const npx = pX[i] * W;
        const npy = pY[i] * H;
        const lifeFactor = Math.sin(pLife[i] * Math.PI);

        ctx.beginPath();
        ctx.moveTo(pPrevX[i], pPrevY[i]);
        ctx.lineTo(npx, npy);
        ctx.lineWidth = 0.5 + lifeFactor * 3.5 * breath;
        ctx.strokeStyle = getSacredPalette(time, pHueOffset[i], lifeFactor, lifeFactor * 0.32);
        ctx.stroke();
    }

    // ── 3 continuous structural ribbons (one per palette anchor) ──
    ctx.save();
    const hueOffsets = [0, 135, 175];
    for (let r = 0; r < 3; r++) {
        ctx.beginPath();
        const phase = (r * Math.PI * 2) / 3;
        const rScale = (0.14 + 0.06 * symFact) * maxRadius * breath;
        for (let s = 0; s < 80; s++) {
            const tV   = s * 0.055;
            const rx   = cx + Math.cos(time * 0.22 + tV + phase) * rScale
                            + Math.sin(tV * 2.2 + time * 0.4) * 22 * breath;
            const ry   = cy + Math.sin(time * 0.28 + tV * 1.25 + phase) * rScale
                            + Math.cos(tV * 1.6 - time * 0.3) * 22 * breath;
            s === 0 ? ctx.moveTo(rx, ry) : ctx.lineTo(rx, ry);
        }
        ctx.strokeStyle = getSacredPalette(time, hueOffsets[r], 0.75, 0.10);
        ctx.lineWidth = 1.6;
        ctx.stroke();
    }
    ctx.restore();
}

// ============================================================
//  MODE 4 — FRACTAL MOSAIC  (alternating subdivision rules)
// ============================================================

// Subdivision shapes per depth level — cycles hex → triangle → star
const FRACTAL_SHAPES = [6, 3, 8];  // sides at depth 0, 1, 2

function renderFractal(time, ctx, cx, cy, maxRadius) {
    const breath  = getBreathingScale(time, 3.2);
    const baseSize = maxRadius * (0.27 + 0.038 * Math.sin(time * 0.18)) * breath;

    // Two root calls: outer + inner counter-rotating (depth intentionally different)
    renderFractalNode(ctx, cx, cy, baseSize, 0, 3, time, 1, breath);
    renderFractalNode(ctx, cx, cy, baseSize * 0.36, 0, 2, time, -1, breath);
}

function renderFractalNode(ctx, x, y, size, depth, maxDepth, time, rootDir, breath) {
    if (depth > maxDepth || size < 1.0) return;

    const sides     = FRACTAL_SHAPES[depth % FRACTAL_SHAPES.length];
    const angleStep = (Math.PI * 2) / sides;

    // Rotation: direction alternates per depth, time-driven, with stochastic offset
    const rotRate   = 0.035 * (depth % 2 === 0 ? rootDir : -rootDir);
    const baseRot   = time * rotRate + depth * (0.4 + 0.15 * (depth + 1)); // phase drift per branch

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(baseRot);

    // Hue shift: global base + depth offset (not hardcoded)
    const hueShift  = depth * 48 + 22;
    const alpha     = (1.0 - depth / (maxDepth + 1.5)) * 0.58;
    const intensity = 1.0 - depth * 0.25;

    ctx.beginPath();

    if (sides === 3) {
        // Triangle: draw outer then inner Sierpinski-like inset
        for (let i = 0; i <= sides; i++) {
            const a  = i * angleStep - Math.PI / 2;
            const px = Math.cos(a) * size, py = Math.sin(a) * size;
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        // Medial triangle
        for (let i = 0; i < sides; i++) {
            const a1 = i * angleStep - Math.PI / 2;
            const a2 = ((i + 1) % sides) * angleStep - Math.PI / 2;
            const mx = (Math.cos(a1) + Math.cos(a2)) * size * 0.5;
            const my = (Math.sin(a1) + Math.sin(a2)) * size * 0.5;
            ctx.moveTo(0, 0);
            ctx.lineTo(mx, my);
        }
    } else if (sides === 8) {
        // Star polygon: skip-3 connections
        for (let i = 0; i < sides; i++) {
            const a1 = (i / sides) * Math.PI * 2;
            const a2 = ((i + 3) % sides / sides) * Math.PI * 2;
            ctx.moveTo(Math.cos(a1) * size, Math.sin(a1) * size);
            ctx.lineTo(Math.cos(a2) * size, Math.sin(a2) * size);
        }
    } else {
        // Hexagon: outline + diagonals
        for (let i = 0; i <= sides; i++) {
            const a  = i * angleStep;
            const px = Math.cos(a) * size, py = Math.sin(a) * size;
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        for (let i = 0; i < sides / 2; i++) {
            const a1 = i * angleStep, a2 = (i + sides / 2) * angleStep;
            ctx.moveTo(Math.cos(a1) * size, Math.sin(a1) * size);
            ctx.lineTo(Math.cos(a2) * size, Math.sin(a2) * size);
        }
    }

    ctx.strokeStyle = getSacredPalette(time, hueShift, intensity, alpha);
    ctx.lineWidth   = Math.max(0.5, 1.5 / (depth + 1));
    ctx.stroke();
    ctx.restore();

    // ── Recursive subdivision on vertex positions ──
    if (depth < maxDepth) {
        // Stochastic depth bias: shrink factor varies slightly per vertex
        const shrinkBase = 0.33 + 0.06 * Math.sin(time * 0.28 + depth);
        for (let i = 0; i < sides; i++) {
            // Vertex angle includes the parent rotation for correctness
            const vAngle = i * angleStep + baseRot;
            const vx = x + Math.cos(vAngle) * size;
            const vy = y + Math.sin(vAngle) * size;
            // Controlled stochastic: deterministic per vertex index so it doesn't flicker
            const biasPhase = depth * 7.3 + i * 2.1;
            const shrink    = shrinkBase + 0.04 * Math.sin(time * 0.4 + biasPhase);
            renderFractalNode(ctx, vx, vy, size * shrink, depth + 1, maxDepth, time, rootDir, breath);
        }
    }
}