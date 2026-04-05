
let animationId = null;
let currentW, currentH;
let time = 0;

export const effect = {
    id: 'norway',
    name: 'Norway (Aurora)',
    run: runNorway,
    stop: stopNorway,
    onResize: (w, h) => {
        currentW = w;
        currentH = h;
    },
    preferredTrack: { trackTitle: "norwegian mood" }, // Fits the theme
    marqueeFont: {
        color: '#E0FFFF', // Light Cyan
        shadowColor: 'rgba(0,128,128,0.8)',
        shadowBlur: 10
    }
};

class AuroraRibbon {
    constructor(color, speed, offset, amplitude, frequency) {
        this.color = color;
        this.speed = speed;
        this.offset = offset;
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.baseY = 0.3; // Center vertically at 30% of height
    }

    draw(ctx, w, h, t) {
        const resolution = 5; // Pixels per segment for smoothness vs perf
        ctx.beginPath();
        ctx.moveTo(0, h);

        for (let x = 0; x <= w; x += resolution) {
            const normX = x / w;
            
            // Complex wave path using layered sines
            const yOffset = 
                Math.sin(t * this.speed + normX * this.frequency + this.offset) * this.amplitude +
                Math.sin(t * this.speed * 0.5 + normX * this.frequency * 2 + this.offset * 1.5) * (this.amplitude * 0.4) +
                Math.cos(t * this.speed * 1.2 + normX * this.frequency * 0.5) * (this.amplitude * 0.2);

            const y = h * this.baseY + yOffset;
            ctx.lineTo(x, y);
        }

        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();

        // Create a vertical gradient for the ribbon "look"
        const gradient = ctx.createLinearGradient(0, h * this.baseY - this.amplitude * 1.5, 0, h);
        
        // Transparent top -> Glow -> Base -> Transparent bottom
        gradient.addColorStop(0, 'rgba(0,0,0,0)');
        gradient.addColorStop(0.2, this.color.replace('0.3', '0.0'));
        gradient.addColorStop(0.4, this.color.replace('0.3', '0.6')); // Bright core
        gradient.addColorStop(0.6, this.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = gradient;
        ctx.fill();
    }
}

const ribbons = [
    new AuroraRibbon('rgba(97, 233, 129, 0.3)', 0.0005, 0.0, 60, 2.0),  // Green
    new AuroraRibbon('rgba(72, 149, 239, 0.3)', 0.0007, 1.5, 80, 1.5),  // Blue
    new AuroraRibbon('rgba(165, 95, 238, 0.3)', 0.0004, 3.0, 50, 2.5),  // Purple
    new AuroraRibbon('rgba(64, 224, 208, 0.25)', 0.0006, 4.5, 70, 1.8) // Turquoise
];

const stars = [];

function initStars() {
    stars.length = 0;
    const numStars = 150;
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random(),
            y: Math.random(),
            size: 0.5 + Math.random() * 1.5,
            opacity: 0.1 + Math.random() * 0.8,
            blinkSpeed: 0.01 + Math.random() * 0.02,
            blinkOffset: Math.random() * Math.PI * 2
        });
    }
}

export function runNorway(contexts, config) {
    const ctx = contexts.ctx2d;
    currentW = contexts.width;
    currentH = contexts.height;
    
    initStars();
    time = 0;

    function render(timestamp) {
        if (!time) time = timestamp;
        const dt = timestamp - time;
        
        // Background: Glacial vertical gradient
        const bgGrad = ctx.createLinearGradient(0, 0, 0, currentH);
        bgGrad.addColorStop(0, '#020b1a'); // Very dark blue
        bgGrad.addColorStop(1, '#0c1a30'); // Deep navy
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, currentW, currentH);

        // Render Stars
        ctx.fillStyle = '#ffffff';
        stars.forEach(star => {
            const blink = (Math.sin(timestamp * star.blinkSpeed + star.blinkOffset) + 1) / 2;
            ctx.globalAlpha = star.opacity * blink;
            ctx.beginPath();
            ctx.arc(star.x * currentW, star.y * currentH, star.size, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1.0;

        // Render Aurora Ribbons with additive blending
        ctx.globalCompositeOperation = 'lighter';
        ribbons.forEach((ribbon, index) => {
            // Sway baseY slowly
            const slowSway = Math.sin(timestamp * 0.0002 + index) * 0.05;
            ribbon.baseY = 0.25 + slowSway;
            ribbon.draw(ctx, currentW, currentH, timestamp);
        });
        ctx.globalCompositeOperation = 'source-over';

        animationId = requestAnimationFrame(render);
    }

    animationId = requestAnimationFrame(render);
}

export function stopNorway() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
}
