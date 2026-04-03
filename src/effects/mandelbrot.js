import { Marquee } from './marquee.js';

let animationId = null;
let activeWrapper = null;
let currentResizeListener = null;
let currentMouseListener = null;
let currentMouseMoveListener = null;
let mousePos = { x: 0, y: 0 };
let mandelbrotState = {
    targetX: -0.743643887037151,
    targetY: 0.131825904205330,
    zoomDepth: 11.0,
    speed: parseFloat(localStorage.getItem('ankifx_mandelbrot_speed')) || 0.15
};

export const effect = {
    id: 'mandelbrot',
    name: 'Mandelbrot',
    run: runMandelbrot,
    stop: stopMandelbrot,
    preferredTrack: { title: "Acoustica Power Bundle 4", trackTitle: "AiR" }
};

export function runMandelbrot(container, marqueeText, position = 'bottom', config = {}) {
    // 1. Dual-Canvas Setup
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; overflow: hidden; pointer-events: none;';
    container.appendChild(wrapper);
    activeWrapper = wrapper;

    const glCanvas = document.createElement('canvas');
    glCanvas.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;';
    wrapper.appendChild(glCanvas);

    const textCanvas = document.createElement('canvas');
    textCanvas.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;';
    wrapper.appendChild(textCanvas);

    const gl = glCanvas.getContext('webgl', { alpha: false, antialias: false });
    const ctx = textCanvas.getContext('2d');

    // 2. WebGL Shaders
    const vsSource = `
        attribute vec2 position;
        void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `;

    const fsSource = `
        precision highp float;
        uniform vec2 u_resolution;
        uniform float u_time;
        uniform float u_speed;
        uniform float u_zoomDepth;
        uniform vec2 u_target;

        // Majestic Deep-Gold Palette
        vec3 palette(float t) {
            vec3 a = vec3(0.5, 0.5, 0.5);
            vec3 b = vec3(0.5, 0.5, 0.5);
            vec3 c = vec3(1.0, 0.7, 0.4);
            vec3 d = vec3(0.0, 0.15, 0.20);
            return a + b * cos(6.28318 * (c * t + d));
        }

        // Symmetric Cubic Easing for infinitely smooth oscillation
        float easeInOutCubic(float x) {
            return x < 0.5 ? 4.0 * x * x * x : 1.0 - pow(-2.0 * x + 2.0, 3.0) / 2.0;
        }

        void main() {
            vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
            // 3. Cinematic Zoom & Coordinate Logic
            // One-way slow dive that cycles: zoom in to max, then zoom back out
            float cycle = mod(u_time * u_speed / max(u_zoomDepth, 1.0), 2.0);
            float progress = cycle > 1.0 ? 2.0 - cycle : cycle;
            float easedProgress = easeInOutCubic(progress);
            
            float zoom = exp(easedProgress * u_zoomDepth);
            vec2 c = u_target + uv * (2.5 / zoom);
            vec2 z = vec2(0.0);
            float iter = 0.0;
            
            // Dynamic Iterations: Saves GPU when zoomed out, adds detail when zoomed in
            float maxIter = clamp(150.0 + 65.0 * log(zoom), 150.0, 1000.0);
            const float ABSOLUTE_MAX = 1000.0;

            // Fractal Loop
            for(float i = 0.0; i < ABSOLUTE_MAX; i++) {
                if (i >= maxIter) break;
                z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
                if(dot(z, z) > 256.0) break; 
                iter++;
            }

            vec3 col = vec3(0.0);

            if(iter < maxIter - 1.0) {
                // Smooth Shading & Coloring
                float smoothIter = iter - log2(max(1.0, log2(dot(z, z)))) + 4.0;
                float colorMap = fract(smoothIter * 0.03 - u_time * 0.2);
                col = palette(colorMap);
            }

            // Vignette Effect
            vec2 normUv = gl_FragCoord.xy / u_resolution.xy;
            float vignette = clamp(1.0 - length(normUv - 0.5) * 1.2, 0.0, 1.0);
            vignette = smoothstep(0.0, 1.0, vignette);
            col *= mix(0.2, 1.0, vignette); // Darken edges

            gl_FragColor = vec4(col, 1.0);
        }
    `;

    function compileShader(type, source) {
        const s = gl.createShader(type);
        gl.shaderSource(s, source);
        gl.compileShader(s);
        return s;
    }

    const program = gl.createProgram();
    gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vsSource));
    gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(program);
    gl.useProgram(program);

    // Buffer Binding
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, "u_time");
    const speedLoc = gl.getUniformLocation(program, "u_speed");
    const zoomDepthLoc = gl.getUniformLocation(program, "u_zoomDepth");
    const targetLoc = gl.getUniformLocation(program, "u_target");
    const resLoc = gl.getUniformLocation(program, "u_resolution");

    // 3. Viewport & Resize Management (High-DPI Support)
    let w, h;
    function resize() {
        const rect = container.getBoundingClientRect();
        w = rect.width;
        h = rect.height;
        const dpr = window.devicePixelRatio || 1;
        
        glCanvas.width = w * dpr;
        glCanvas.height = h * dpr;
        textCanvas.width = w * dpr;
        textCanvas.height = h * dpr;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
        
        gl.viewport(0, 0, w * dpr, h * dpr);
        gl.uniform2f(resLoc, w * dpr, h * dpr);
    }
    window.addEventListener('resize', resize);
    currentResizeListener = resize;
    resize();

    // 3.5 Debug Tuning Panel
    let debugInfoEl = null;
    let getCoordsAt = null;
    const tunerRows = [];
    
    if (config.debug) {
        const pickerStack = document.getElementById('afx-controls-stack-right');
        if (pickerStack) {
            // Coordinate Info (Mouse Tracker)
            debugInfoEl = document.createElement('div');
            debugInfoEl.id = 'afx-mandelbrot-debug-info';
            debugInfoEl.className = 'afx-control-row';
            debugInfoEl.style.cssText = 'height: 20px !important; margin-bottom: 2px; pointer-events: none; justify-content: flex-end; opacity: 0.8; font-size: 11px !important; color: #ff00ff;';
            debugInfoEl.textContent = 'HOVER TO SEE TARGET COORDS';
            pickerStack.prepend(debugInfoEl);

            // Parameter Tuning Panel
            const createSlider = (label, key, min, max, step, precision = 3) => {
                const row = document.createElement('div');
                row.className = 'afx-control-row mandelbrot-tuner-row';
                row.style.cssText = 'height: 24px !important; margin-bottom: 2px; gap: 8px; justify-content: flex-end; font-size: 10px !important; color: #00ffff;';
                
                const val = mandelbrotState[key];
                row.innerHTML = `
                    <span>${label}:</span>
                    <input type="range" class="mandelbrot-slider" data-key="${key}" min="${min}" max="${max}" step="${step}" value="${val}" style="width: 70px; accent-color: #00ffff; cursor: pointer;">
                    <input type="number" class="mandelbrot-val" data-key="${key}" step="${step}" value="${val.toFixed(precision)}" style="width: 70px; background: rgba(0,0,0,0.4); border: 1px solid #00ffff; color: #00ffff; font-size: 10px !important; padding: 2px 4px; border-radius: 3px; outline: none;">
                `;

                const slider = row.querySelector('.mandelbrot-slider');
                const numInput = row.querySelector('.mandelbrot-val');

                const updateVal = (newVal, skipInput = false) => {
                    mandelbrotState[key] = parseFloat(newVal);
                    if (!skipInput) numInput.value = mandelbrotState[key].toFixed(precision);
                    slider.value = mandelbrotState[key];
                    if (key === 'speed') localStorage.setItem('ankifx_mandelbrot_speed', mandelbrotState[key]);
                };

                slider.oninput = (e) => updateVal(e.target.value);
                numInput.oninput = (e) => updateVal(e.target.value, true);
                
                return row;
            };

            tunerRows.push(createSlider('ZOOM', 'zoomDepth', 2.0, 25.0, 0.1, 1));
            tunerRows.push(createSlider('T-X', 'targetX', -2.5, 1.0, 0.0001, 6));
            tunerRows.push(createSlider('T-Y', 'targetY', -1.5, 1.5, 0.0001, 6));
            tunerRows.push(createSlider('SPD', 'speed', 0.005, 0.3, 0.005, 3));

            tunerRows.forEach(row => pickerStack.prepend(row));
        }

        getCoordsAt = (screenX, screenY, currentTime) => {
            const cycle = (currentTime * mandelbrotState.speed / Math.max(mandelbrotState.zoomDepth, 1.0)) % 2.0;
            const progress = cycle > 1.0 ? 2.0 - cycle : cycle;
            const easedProgress = progress < 0.5 ? 4.0 * Math.pow(progress, 3.0) : 1.0 - Math.pow(-2.0 * progress + 2.0, 3.0) / 2.0;
            const zoom = Math.exp(easedProgress * mandelbrotState.zoomDepth);
            
            const uvX = (screenX - w / 2) / h;
            const uvY = (h / 2 - screenY) / h;
            
            return {
                tx: mandelbrotState.targetX + uvX * (2.5 / zoom),
                ty: mandelbrotState.targetY + uvY * (2.5 / zoom)
            };
        };

        const handleMouseDown = (e) => {
            if (e.target.closest('.afx-controls-stack') || e.target.closest('.afx-dialog') || e.target.closest('.afx-dual-control-stack')) return;
            
            const currentTime = (performance.now() * 0.001) - startTime;
            const { tx, ty } = getCoordsAt(e.clientX, e.clientY, currentTime);
            
            mandelbrotState.targetX = tx;
            mandelbrotState.targetY = ty;
            
            ['targetX', 'targetY'].forEach(key => {
                const slider = document.querySelector(`.mandelbrot-slider[data-key="${key}"]`);
                const numInput = document.querySelector(`.mandelbrot-val[data-key="${key}"]`);
                if (slider) slider.value = mandelbrotState[key];
                if (numInput) numInput.value = mandelbrotState[key].toFixed(6);
            });
        };
        window.addEventListener('mousedown', handleMouseDown);
        currentMouseListener = handleMouseDown;

        const handleMouseMove = (e) => {
            mousePos.x = e.clientX;
            mousePos.y = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);
        currentMouseMoveListener = handleMouseMove; 
    }

    const marquee = new Marquee(marqueeText, position, {
        color: '#FFF',
        outline: '#000'
    });

    // 4. Main Render Loop (Frame-rate independent)
    const startTime = performance.now() * 0.001;
    
    function render() {
        const time = performance.now() * 0.001 - startTime;

        // Render Fractal (GPU)
        gl.uniform1f(timeLoc, time);
        gl.uniform1f(speedLoc, mandelbrotState.speed);
        gl.uniform1f(zoomDepthLoc, mandelbrotState.zoomDepth);
        gl.uniform2f(targetLoc, mandelbrotState.targetX, mandelbrotState.targetY);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        // Render Marquee (CPU)
        ctx.clearRect(0, 0, w, h);
        marquee.render(ctx, w, h);
        
        if (debugInfoEl && getCoordsAt) {
            const currentTime = (performance.now() * 0.001) - startTime;
            const { tx, ty } = getCoordsAt(mousePos.x, mousePos.y, currentTime);
            debugInfoEl.textContent = `TARGET X: ${tx.toFixed(6)}, Y: ${ty.toFixed(6)}`;
        }

        animationId = requestAnimationFrame(render);
    }

    render();
    return marquee;
}

export function stopMandelbrot() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    if (activeWrapper) {
        if (currentResizeListener) {
            window.removeEventListener('resize', currentResizeListener);
            currentResizeListener = null;
        }        
        if (currentMouseListener) {
            window.removeEventListener('mousedown', currentMouseListener);
            currentMouseListener = null;
        }
        if (currentMouseMoveListener) {
            window.removeEventListener('mousemove', currentMouseMoveListener);
            currentMouseMoveListener = null;
        }
        
        document.querySelectorAll('.mandelbrot-tuner-row').forEach(row => row.remove());
        const debugInfo = document.getElementById('afx-mandelbrot-debug-info');
        if (debugInfo) debugInfo.remove();

        // Safely force WebGL to drop the context, preventing GPU memory leaks
        const glCanvas = activeWrapper.querySelector('canvas');
        if (glCanvas) {
            const gl = glCanvas.getContext('webgl');
            const loseContext = gl?.getExtension('WEBGL_lose_context');
            if (loseContext) loseContext.loseContext();
        }

        activeWrapper.remove();
        activeWrapper = null;
    }
}