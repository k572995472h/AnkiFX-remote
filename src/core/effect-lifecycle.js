import { EFFECTS } from '../effects/registry.js';
import { renderEffectControls } from './ui/controls.js';
import { effectDprFor, getAnkiMobileOffsets, isMarqueeEnabled } from './platform.js';

export function startEffect(state, config, container, position, activeEffect) {
    // Apply debug class
    if (activeEffect === 'debug') {
        container.classList.add('afx-debug-active');
    } else {
        container.classList.remove('afx-debug-active');
    }

    // Apply effect-specific class to HTML for styling (e.g., afx-effect-none)
    const html = document.documentElement;
    Array.from(html.classList).forEach(c => {
        if (c.startsWith('afx-effect-')) html.classList.remove(c);
    });
    html.classList.add(`afx-effect-${activeEffect}`);

    state.currentEffectId = activeEffect;

    const effect = EFFECTS[activeEffect];
    if (effect) {
        const offsets = getAnkiMobileOffsets();
        const dpr = effectDprFor(activeEffect, state.dpr);
        const sharedContexts = {
            gl: state.glContext,
            ctx2d: state.ctx2D,
            canvasGL: state.sharedGL,
            canvas2D: state.shared2D,
            width: state.width,
            height: state.height,
            dpr: dpr,
            topInset: offsets.ioHeader,
            visibleWidth: state.width,
            visibleHeight: state.height - offsets.ioHeader,
            visibleBounds: {
                top: offsets.ioHeader,
                bottom: state.height
            }
        };

        // Apply effect-specific marquee styling
        if (state.marquee) {
            state.marquee.updateStyles(effect.marqueeFont || {});
        }

        effect.run(sharedContexts, config);

        // Render dynamic controls for the active effect
        renderEffectControls(effect);

        // Respect toggle state on new effect start
        if (state.marquee) {
            state.marquee.enabled = isMarqueeEnabled();
        }
    } else {
        // Apply standard default marquee styling if no active effect
        if (state.marquee) {
            state.marquee.updateStyles({});
        }

        // Clear any dynamic controls from previous effect
        renderEffectControls(null);
    }
}
