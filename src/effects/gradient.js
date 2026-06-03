// --- Stripe WebGl Gradient — AnkiFX effect adapter ---
import { Gradient, bindGradientEffect } from './lib/stripe-gradient-lib.js';

let gradientInstance = null;

export const effect = {
    id: 'gradient',
    name: 'Gradient',
    controls: [
        {
            type: 'button',
            id: 'gradient-randomize',
            label: '🎨 RANDOMIZE',
            onClick: () => {
                if (gradientInstance) {
                    gradientInstance.randomizeColors();
                }
            }
        }
    ],
    run: (contexts, config) => {
        if (gradientInstance) {
            gradientInstance.destroy();
        }
        gradientInstance = new Gradient(
            contexts.canvasGL,
            contexts.gl,
            contexts.width,
            contexts.height
        );
        gradientInstance.conf.playing = true;
        gradientInstance.last = 0;
        gradientInstance.animationId = requestAnimationFrame(gradientInstance.animate);
    },
    stop: () => {
        if (gradientInstance) {
            gradientInstance.destroy();
            gradientInstance = null;
        }
        document.documentElement.style.removeProperty('--afx-body-color');
        document.documentElement.style.removeProperty('--afx-text-shadow');
    },
    onResize: (w, h, dpr) => {
        if (gradientInstance) {
            gradientInstance.width = w;
            gradientInstance.height = h;
            gradientInstance.resize();
        }
    },
    marqueeFont: {
        color: '#E6E6FA',
        shadowColor: 'rgba(230, 230, 250, 0.6)',
        shadowBlur: 8
    }
};

bindGradientEffect(effect);
