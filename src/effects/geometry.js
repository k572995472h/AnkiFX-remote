let animationId = null;
let currentW, currentH;
let mode = parseInt(localStorage.getItem('ankifx_geometry_mode') || '0', 10);
const MODES = ['unity', 'light', 'flow', 'fractal'];
if (isNaN(mode) || mode < 0 || mode >= MODES.length) {
    mode = 0;
}

let flowParticles = [];

export const effect = {
    id: 'geometry',
    name: 'Geometry',
    run: runGeometry,
    stop: stopGeometry,
    onResize: (w, h) => {
        currentW = w;
        currentH = h;
    },
    controls: [
        {
            type: 'button',
            id: 'geometry-mode-switch',
            label: getModeLabel(mode),
            onClick: () => {
                cycleMode();
            }
        }
    ],
    marqueeFont: {
        colorFn: (time, i) => {
            const hues = [45, 180, 220]; // Gold, Turquoise, Indigo/Blue
            const idx = Math.floor(time * 0.5 + i * 0.05) % hues.length;
            const nextIdx = (idx + 1) % hues.length;
            const progress = (time * 0.5 + i * 0.05) % 1.0;
            const h = hues[idx] + (hues[nextIdx] - hues[idx]) * progress;
            return `hsl(${h}, 95%, 65%)`;
        },
        shadowColor: 'rgba(255, 215, 0, 0.4)',
        shadowBlur: 15
    }
};

export function cycleMode() {
    mode = (mode + 1) % MODES.length;
    localStorage.setItem('ankifx_geometry_mode', mode);
    if (effect.controls && effect.controls[0]) {
        effect.controls[0].label = getModeLabel(mode);
        if (typeof AnkiFX !== 'undefined' && AnkiFX.renderEffectControls) {
            AnkiFX.renderEffectControls(effect);
        }
    }
}

function getModeLabel(m) {
    switch (MODES[m]) {
        case 'unity': return '👁️ UNITY MODE';
        case 'light': return '✨ LIGHT MODE';
        case 'flow': return '🌊 FLOW MODE';
        case 'fractal': return '❄️ FRACTAL MOSAIC';
        default: return '👁️ MODE';
    }
}

function initFlowParticles() {
    flowParticles = [];
    for (let i = 0; i < 150; i++) {
        flowParticles.push({
            x: Math.random(),
            y: Math.random(),
            prevX: 0,
            prevY: 0,
            life: Math.random(),
            speed: 0.0012 + Math.random() * 0.0018,
            hue: Math.random() < 0.4 ? 45 : (Math.random() < 0.7 ? 180 : 220)
        });
    }
}

export function runGeometry(contexts, config) {
    const ctx = contexts.ctx2d;
    currentW = contexts.width;
    currentH = contexts.height;
    let time = 0;

    // Sync button label to current persisted mode
    if (effect.controls && effect.controls[0]) {
        effect.controls[0].label = getModeLabel(mode);
    }

    if (flowParticles.length === 0) {
        initFlowParticles();
    }

    function render() {
        time += 0.012;

        ctx.globalCompositeOperation = 'source-over';
        
        // Vary trail persistence based on active mode
        let bgAlpha = 0.25;
        if (MODES[mode] === 'unity') bgAlpha = 0.22;
        else if (MODES[mode] === 'light') bgAlpha = 0.15;
        else if (MODES[mode] === 'flow') bgAlpha = 0.08;
        else if (MODES[mode] === 'fractal') bgAlpha = 0.28;

        ctx.fillStyle = `rgba(2, 2, 8, ${bgAlpha})`;
        ctx.fillRect(0, 0, currentW, currentH);

        const cx = currentW / 2;
        const cy = currentH / 2;
        const maxRadius = Math.max(currentW, currentH) * 0.85;

        // Apply additive blending
        ctx.globalCompositeOperation = 'lighter';

        // Draw center anchor glow
        const centerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 35 + Math.sin(time * 2) * 12);
        let glowColor = 'rgba(255, 215, 0, 0.25)'; // default gold
        if (MODES[mode] === 'light') glowColor = 'rgba(255, 255, 255, 0.5)';
        else if (MODES[mode] === 'flow') glowColor = 'rgba(64, 224, 208, 0.3)';
        else if (MODES[mode] === 'fractal') glowColor = 'rgba(138, 43, 226, 0.3)';
        
        centerGlow.addColorStop(0, glowColor);
        centerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = centerGlow;
        ctx.beginPath();
        ctx.arc(cx, cy, 60, 0, Math.PI * 2);
        ctx.fill();

        // Dispatch rendering based on active mode
        switch (MODES[mode]) {
            case 'unity':
                renderUnity(time, ctx, cx, cy, maxRadius);
                break;
            case 'light':
                renderLight(time, ctx, cx, cy, maxRadius);
                break;
            case 'flow':
                renderFlow(time, ctx, cx, cy, maxRadius);
                break;
            case 'fractal':
                renderFractal(time, ctx, cx, cy, maxRadius);
                break;
        }

        // Draw soft vignette at the edges
        ctx.globalCompositeOperation = 'source-over';
        const vignette = ctx.createRadialGradient(cx, cy, maxRadius * 0.35, cx, cy, maxRadius * 1.25);
        vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
        vignette.addColorStop(1, 'rgba(2, 2, 8, 0.65)');
        ctx.fillStyle = vignette;
        ctx.fillRect(0, 0, currentW, currentH);

        animationId = requestAnimationFrame(render);
    }
    animationId = requestAnimationFrame(render);
}

export function stopGeometry() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    flowParticles = []; // clear to release memory
}

// --- SUBEFFECT RENDERING ROUTINES ---

function renderUnity(time, ctx, cx, cy, maxRadius) {
    const numLayers = 6;
    const speed = 0.12;
    const zoomProgress = (time * speed) % 1.0;
    
    for (let i = 0; i < numLayers; i++) {
        // Logarithmic / exponential zoom illusion
        const t = (i - zoomProgress + numLayers) % numLayers;
        const scale = Math.pow(2, t - 2); 
        const radius = scale * 50; 
        
        if (radius > maxRadius * 1.5) continue;
        
        let alpha = 1.0;
        if (t < 1) alpha = t; 
        else if (t > numLayers - 2) alpha = numLayers - t;
        alpha = Math.max(0, Math.min(1, alpha)) * 0.65;
        
        const folds = 8 + 2 * (i % 3); // alternating 8, 10, 12 fold symmetry
        
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * 0.04 * (i % 2 === 0 ? 1 : -1));
        
        // Draw star polygon
        drawStarPolygon(ctx, 0, 0, radius, folds, alpha, time);
        ctx.restore();
    }
}

function drawStarPolygon(ctx, x, y, r, folds, alpha, time) {
    const step = folds === 8 ? 3 : (folds === 10 ? 3 : 5);
    ctx.beginPath();
    for (let j = 0; j < folds; j++) {
        const angle1 = (j / folds) * Math.PI * 2;
        const x1 = x + Math.cos(angle1) * r;
        const y1 = y + Math.sin(angle1) * r;
        
        const nextIdx = (j + step) % folds;
        const angle2 = (nextIdx / folds) * Math.PI * 2;
        const x2 = x + Math.cos(angle2) * r;
        const y2 = y + Math.sin(angle2) * r;
        
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
    }
    
    // Rhythmic radial dividers
    for (let j = 0; j < folds; j++) {
        const angle = (j / folds) * Math.PI * 2;
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
    }
    
    ctx.lineWidth = 1.2;
    // Map folds to cohesive theme hues (8: Gold, 10: Turquoise, 12: Indigo/Blue)
    const hue = folds === 8 ? 45 : (folds === 10 ? 180 : 220);
    ctx.strokeStyle = `hsla(${hue}, 95%, 65%, ${alpha})`;
    ctx.stroke();
}

function renderLight(time, ctx, cx, cy, maxRadius) {
    // Primary central wave source
    drawWaves(ctx, cx, cy, time, 1.0, maxRadius);
    
    // Overlapping orbiting wave sources creating "light upon light" intersections
    const orbitCount = 3;
    for (let i = 0; i < orbitCount; i++) {
        const angle = time * 0.6 + (i * Math.PI * 2) / orbitCount;
        const dist = (Math.sin(time * 0.4) * 0.12 + 0.15) * maxRadius;
        const ox = cx + Math.cos(angle) * dist;
        const oy = cy + Math.sin(angle) * dist;
        drawWaves(ctx, ox, oy, time + i * 0.25, 0.45, maxRadius);
    }
}

function drawWaves(ctx, x, y, time, weight, maxRadius) {
    const numRings = 5;
    const speed = 0.18;
    for (let j = 0; j < numRings; j++) {
        const progress = ((j / numRings) + time * speed) % 1.0;
        const radius = progress * maxRadius * 0.85;
        const alpha = Math.sin(progress * Math.PI) * 0.45 * weight;
        if (alpha <= 0) continue;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        
        const hue = 45 + progress * 175;
        ctx.strokeStyle = `hsla(${hue}, 95%, 60%, ${alpha})`;
        ctx.lineWidth = 1.5 + (1.0 - progress) * 6; // Thicker at source center
        ctx.stroke();
        
        // Subtle ray lines
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(time * 0.08);
        ctx.beginPath();
        const rays = 8;
        for (let r = 0; r < rays; r++) {
            const angle = (r / rays) * Math.PI * 2;
            ctx.moveTo(Math.cos(angle) * (radius * 0.82), Math.sin(angle) * (radius * 0.82));
            ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
        }
        ctx.strokeStyle = `hsla(${hue}, 90%, 65%, ${alpha * 0.25})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
    }
}

function renderFlow(time, ctx, cx, cy, maxRadius) {
    if (flowParticles.length === 0) {
        initFlowParticles();
    }
    
    // Draw calligraphic particles following the sinusoidal flow field
    flowParticles.forEach(p => {
        const px = p.x * currentW;
        const py = p.y * currentH;
        p.prevX = px;
        p.prevY = py;
        
        const fx = p.x * 3.5;
        const fy = p.y * 3.5;
        const angle = Math.sin(fx * Math.PI + time * 0.4) * Math.cos(fy * Math.PI - time * 0.2) * Math.PI * 2.2 + (time * 0.05);
        
        p.x += Math.cos(angle) * p.speed;
        p.y += Math.sin(angle) * p.speed;
        p.life -= 0.0018;
        
        if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1 || p.life <= 0) {
            const rAngle = Math.random() * Math.PI * 2;
            const rDist = Math.random() * 0.15;
            p.x = 0.5 + Math.cos(rAngle) * rDist;
            p.y = 0.5 + Math.sin(rAngle) * rDist;
            p.prevX = p.x * currentW;
            p.prevY = p.y * currentH;
            p.life = 0.6 + Math.random() * 0.4;
            p.speed = 0.001 + Math.random() * 0.002;
            p.hue = Math.random() < 0.4 ? 45 : (Math.random() < 0.7 ? 180 : 220);
        }
        
        const npx = p.x * currentW;
        const npy = p.y * currentH;
        
        ctx.beginPath();
        ctx.moveTo(p.prevX, p.prevY);
        ctx.lineTo(npx, npy);
        
        const weight = Math.sin(p.life * Math.PI);
        ctx.lineWidth = 0.6 + weight * 4.0;
        ctx.strokeStyle = `hsla(${p.hue}, 95%, 62%, ${weight * 0.35})`;
        ctx.stroke();
    });
    
    // Draw 3 continuous elegant vector ribbons
    ctx.save();
    for (let r = 0; r < 3; r++) {
        ctx.beginPath();
        const ribbonPhase = (r * Math.PI * 2) / 3;
        for (let step = 0; step < 70; step++) {
            const tVal = step * 0.06;
            const scale = 0.16 + Math.sin(time * 0.18 + tVal * 0.4) * 0.08;
            const rx = cx + Math.cos(time * 0.25 + tVal + ribbonPhase) * maxRadius * scale + Math.sin(tVal * 2.5 + time) * 25;
            const ry = cy + Math.sin(time * 0.32 + tVal * 1.3 + ribbonPhase) * maxRadius * scale + Math.cos(tVal * 1.8 - time) * 25;
            
            if (step === 0) ctx.moveTo(rx, ry);
            else ctx.lineTo(rx, ry);
        }
        const hue = r === 0 ? 45 : (r === 1 ? 180 : 220);
        ctx.strokeStyle = `hsla(${hue}, 90%, 65%, 0.12)`;
        ctx.lineWidth = 1.8;
        ctx.stroke();
    }
    ctx.restore();
}

function renderFractal(time, ctx, cx, cy, maxRadius) {
    const baseSize = maxRadius * (0.28 + Math.sin(time * 0.2) * 0.04);
    // Outer root
    renderFractalRecursive(ctx, cx, cy, baseSize, 0, 3, time);
    // Inner root rotating opposite
    renderFractalRecursive(ctx, cx, cy, baseSize * 0.38, 0, 2, time + Math.PI);
}

function renderFractalRecursive(ctx, x, y, size, depth, maxDepth, time) {
    if (depth > maxDepth) return;
    
    const sides = 6;
    const angleStep = (Math.PI * 2) / sides;
    
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(time * 0.05 * (depth % 2 === 0 ? 1 : -1) + depth * 0.25);
    
    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
        const angle = i * angleStep;
        const px = Math.cos(angle) * size;
        const py = Math.sin(angle) * size;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    
    // Tessellation cross lines
    for (let i = 0; i < sides / 2; i++) {
        const a1 = i * angleStep;
        const a2 = (i + sides / 2) * angleStep;
        ctx.moveTo(Math.cos(a1) * size, Math.sin(a1) * size);
        ctx.lineTo(Math.cos(a2) * size, Math.sin(a2) * size);
    }
    
    const hue = (45 + depth * 55 + time * 12) % 360;
    const alpha = (1.0 - depth / (maxDepth + 1.2)) * 0.6;
    ctx.strokeStyle = `hsla(${hue}, 92%, 63%, ${alpha})`;
    ctx.lineWidth = 1.4 / (depth + 1);
    ctx.stroke();
    
    ctx.restore();
    
    // Subdivide on vertices
    if (depth < maxDepth) {
        const nextSize = size * (0.35 + Math.sin(time * 0.35) * 0.06);
        for (let i = 0; i < sides; i++) {
            const angle = i * angleStep + time * 0.03 * (depth % 2 === 0 ? 1 : -1);
            const vx = x + Math.cos(angle) * size;
            const vy = y + Math.sin(angle) * size;
            renderFractalRecursive(ctx, vx, vy, nextSize, depth + 1, maxDepth, time);
        }
    }
}