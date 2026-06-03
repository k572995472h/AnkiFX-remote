import { EFFECTS } from '../effects/registry.js';
import { getAnkiMobileOffsets, getGlDprCap, getCanvasDprCap, effectDprFor } from './platform.js';

/**
 * Sets --afx-viewport-height and --afx-bottom-offset CSS variables,
 * resizes all shared canvases, resets rendering contexts, and
 * notifies the active effect of the new dimensions.
 */
export function handleResize(state) {
    const background = document.getElementById('ankifx-background');
    if (!background || !state.sharedGL || !state.shared2D || !state.sharedMarquee) return;

    const offsets = getAnkiMobileOffsets();
    const ioHeader = offsets.ioHeader;

    // Update CSS viewport height so background/overlay match visible bounds
    document.documentElement.style.setProperty(
        '--afx-viewport-height',
        `calc(100dvh + ${ioHeader}px)`
    );

    // Measure canvas dimensions
    const rect = background.getBoundingClientRect();
    state.width = rect.width;
    state.height = document.documentElement.clientHeight + ioHeader;
    state.dpr = getCanvasDprCap();

    const glDpr = getGlDprCap();

    // Resize GL Canvas
    state.sharedGL.width = state.width * glDpr;
    state.sharedGL.height = state.height * glDpr;
    state.sharedGL.style.width = state.width + 'px';
    state.sharedGL.style.height = state.height + 'px';

    // Resize 2D Canvas
    state.shared2D.width = state.width * state.dpr;
    state.shared2D.height = state.height * state.dpr;
    state.shared2D.style.width = state.width + 'px';
    state.shared2D.style.height = state.height + 'px';

    // Resize Marquee Canvas
    state.sharedMarquee.width = state.width * state.dpr;
    state.sharedMarquee.height = state.height * state.dpr;
    state.sharedMarquee.style.width = state.width + 'px';
    state.sharedMarquee.style.height = state.height + 'px';

    // Global context resets
    if (state.glContext) {
        state.glContext.viewport(0, 0, state.sharedGL.width, state.sharedGL.height);
    }
    if (state.ctx2D) {
        state.ctx2D.setTransform(1, 0, 0, 1, 0, 0);
        state.ctx2D.scale(state.dpr, state.dpr);
    }
    if (state.ctxMarquee) {
        state.ctxMarquee.setTransform(1, 0, 0, 1, 0, 0);
        state.ctxMarquee.scale(state.dpr, state.dpr);
    }

    // Notify active effect
    if (state.currentEffectId && EFFECTS[state.currentEffectId]?.onResize) {
        const dpr = effectDprFor(state.currentEffectId, state.dpr);
        EFFECTS[state.currentEffectId].onResize(state.width, state.height, dpr);
    }
}

/**
 * Brief startup monitor for AnkiMobile's delayed CSS variable injection.
 * Polls every 50ms for 2 seconds, then stops. Triggers handleResize
 * if --io-header or document dimensions change during that window.
 */
export function initViewportMonitoring(state) {
    const initial = getAnkiMobileOffsets();
    let lastHeader = initial.ioHeader;
    let lastWinHeight = window.innerHeight;
    let lastDocHeight = document.documentElement.clientHeight;

    const monitorIv = setInterval(() => {
        const offsets = getAnkiMobileOffsets();
        const currentWinHeight = window.innerHeight;
        const currentDocHeight = document.documentElement.clientHeight;

        if (offsets.ioHeader !== lastHeader || currentWinHeight !== lastWinHeight || currentDocHeight !== lastDocHeight) {
            lastHeader = offsets.ioHeader;
            lastWinHeight = currentWinHeight;
            lastDocHeight = currentDocHeight;
            handleResize(state);
        }
    }, 50);

    // Stop monitoring after 2 seconds (enough for AnkiMobile to settle)
    setTimeout(() => clearInterval(monitorIv), 2000);
}
