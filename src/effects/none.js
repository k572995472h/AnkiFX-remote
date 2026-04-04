import { Marquee } from './marquee.js';

let animationId = null;

export const effect = {
    id: 'none',
    name: 'None',
    run: runNone,
    stop: stopNone
};

export function runNone(container, marqueeText, position = 'bottom') {
    // 1. Detect Anki Theme (Night Mode)
    const isNightMode = document.body.classList.contains('nightMode') || 
                        document.body.classList.contains('night_mode') ||
                        window.matchMedia('(prefers-color-scheme: dark)').matches;

    // 2. Apply theme-specific colors
    if (isNightMode) {
        // Dark Mode: Matches Anki's standard dark canvas
        document.documentElement.style.setProperty('--afx-body-bg', '#2c2c2c', 'important');
        document.documentElement.style.setProperty('--afx-body-color', '#ffffff', 'important');
    } else {
        // Light Mode: Matches Anki's standard light canvas
        document.documentElement.style.setProperty('--afx-body-bg', '#f5f5f5', 'important');
        document.documentElement.style.setProperty('--afx-body-color', '#000000', 'important');
    }

    // 3. Create a clean transparent canvas for the marquee
    const canvas = document.createElement('canvas');
    canvas.id = 'afx-none-canvas';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let w, h;

    function resize() {
        const rect = container.getBoundingClientRect();
        w = canvas.width = rect.width;
        h = canvas.height = rect.height;
    }
    window.addEventListener('resize', resize);
    resize();

    // 4. Initialize Marquee
    // Use a shadow to ensure visibility on both light and dark backgrounds
    const marquee = new Marquee(marqueeText, position, {
        color: isNightMode ? '#ffffff' : '#000000',
        shadowColor: isNightMode ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
        shadowBlur: 5
    });

    function render() {
        ctx.clearRect(0, 0, w, h);
        marquee.render(ctx, w, h);
        animationId = requestAnimationFrame(render);
    }
    animationId = requestAnimationFrame(render);

    return marquee;
}

export function stopNone() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    // Restore defaults when switching back to animated effects
    document.documentElement.style.removeProperty('--afx-body-bg');
    document.documentElement.style.removeProperty('--afx-body-color');
}
