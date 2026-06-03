
export const effect = {
    id: 'none',
    name: 'None',
    run: runNone,
    stop: stopNone,
    marqueeFont: {
        color: '#ffffff',
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowBlur: 5
    }
};

export function runNone(contexts, config) {
    // Clear canvas once — CSS hides the canvases via html.afx-effect-none
    // so no animation loop is needed.
    const ctx = contexts.ctx2d;
    ctx.clearRect(0, 0, contexts.width, contexts.height);
}

export function stopNone() {
    // No-op: no animation loop to cancel.
}
