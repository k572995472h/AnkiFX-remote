
let animationId = null;
let currentW, currentH;

export const effect = {
    id: 'none',
    name: 'None',
    run: runNone,
    stop: stopNone,
    onResize: (w, h) => {
        currentW = w;
        currentH = h;
    },
    marqueeFont: {
        color: '#ffffff',
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowBlur: 5
    }
};

export function runNone(contexts, config) {
    const ctx = contexts.ctx2d;
    currentW = contexts.width;
    currentH = contexts.height;

    // 1. Detect Anki Theme (Night Mode)
    const isNightMode = document.body.classList.contains('nightMode') || 
                        document.body.classList.contains('night_mode') ||
                        window.matchMedia('(prefers-color-scheme: dark)').matches;

    // 2. Apply theme-specific colors
    if (isNightMode) {
        document.documentElement.style.setProperty('--afx-body-bg', '#2c2c2c', 'important');
        document.documentElement.style.setProperty('--afx-body-color', '#ffffff', 'important');
    } else {
        document.documentElement.style.setProperty('--afx-body-bg', '#f5f5f5', 'important');
        document.documentElement.style.setProperty('--afx-body-color', '#000000', 'important');
    }

    function render() {
        ctx.clearRect(0, 0, currentW, currentH);
        animationId = requestAnimationFrame(render);
    }
    animationId = requestAnimationFrame(render);
}

export function stopNone() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    document.documentElement.style.removeProperty('--afx-body-bg');
    document.documentElement.style.removeProperty('--afx-body-color');
}
