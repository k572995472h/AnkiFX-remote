import { Marquee } from './marquee.js';

let animationId = null;

export const effect = {
    id: 'none',
    name: 'None',
    run: runNone,
    stop: stopNone
};

export function runNone(container, marqueeText, position = 'bottom') {
    // 1. Force transparency to reveal Anki card background
    document.documentElement.style.setProperty('--afx-body-bg', 'transparent');
    document.documentElement.style.setProperty('--afx-none-bg', 'transparent');

    const scanForWhiteBackgrounds = () => {
        console.log("🔍 [AnkiFX Debug] Starting Deep DOM Scan (including Shadow DOM)...");
        
        const structural = ['html', 'body', '.card', '.iphone', '.mobile', '#qa', '#content', '#container', '#outer'];
        structural.forEach(sel => {
            const el = document.querySelector(sel);
            if (el) {
                const style = window.getComputedStyle(el);
                console.log(`[Structural] ${sel}: bg='${style.backgroundColor}', zIndex='${style.zIndex}'`);
            }
        });

        const results = [];
        const scan = (root) => {
            const elements = root.querySelectorAll('*');
            elements.forEach(el => {
                if (el.closest && el.closest('.eruda-container')) return;
                
                const style = window.getComputedStyle(el);
                const rect = el.getBoundingClientRect();
                
                // Light color check
                const bg = style.backgroundColor;
                const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                if (match && parseInt(match[1]) > 200 && parseInt(match[2]) > 200 && parseInt(match[3]) > 200) {
                    results.push({ tag: el.tagName, id: el.id, bg: bg, el: el });
                }

                // Full size check
                if (rect.width > window.innerWidth * 0.9 && rect.height > window.innerHeight * 0.9) {
                    console.log(`[FullSize] ${el.tagName}${el.id ? '#' + el.id : ''}: bg='${style.backgroundColor}', zIndex='${style.zIndex}'`);
                }

                if (el.shadowRoot) scan(el.shadowRoot);
            });
        };

        scan(document);
        console.warn(`⚠️ [AnkiFX Debug] Found ${results.length} light elements.`, results);
        
        // --- THE COLOR TEST ---
        console.log("🎨 [AnkiFX Debug] Starting Color Test in 2 seconds...");
        setTimeout(() => {
            console.log("🎨 [AnkiFX Debug] Setting background to RED to check visibility...");
            document.documentElement.style.setProperty('--afx-body-bg', 'red', 'important');
        }, 2000);
        setTimeout(() => {
            console.log("🎨 [AnkiFX Debug] Restoring TRANSPARENT...");
            document.documentElement.style.setProperty('--afx-body-bg', 'transparent', 'important');
        }, 4000);
    };

    // 2. Eruda Integration
    if (!window.eruda) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/eruda';
        script.onload = () => {
            if (window.eruda) {
                window.eruda.init();
                window.eruda.position({ x: 20, y: 20 });
                setTimeout(scanForWhiteBackgrounds, 1000);
            }
        };
        document.head.appendChild(script);
    } else {
        try { 
            window.eruda.init(); 
            window.eruda.position({ x: 20, y: 20 });
            setTimeout(scanForWhiteBackgrounds, 1000);
        } catch(e) {}
    }

    // 3. Create a clean transparent canvas for the marquee
    const canvas = document.createElement('canvas');
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
    const marquee = new Marquee(marqueeText, position, {
        color: '#ffffff',
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowBlur: 5
    });

    function render() {
        ctx.clearRect(0, 0, w, h);
        marquee.render(ctx, w, h);
        animationId = requestAnimationFrame(render);
    }
    animationId = requestAnimationFrame(render);

    // Return the marquee instance so the engine can control its enabled state
    return marquee;
}

export function stopNone() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    // Restore defaults when switching away
    document.documentElement.style.removeProperty('--afx-body-bg');
    document.documentElement.style.removeProperty('--afx-none-bg');
    
    // Hide Eruda if it exists, to keep the UI clean when switching back to animations
    if (window.eruda) {
        try { window.eruda.hide(); } catch(e) {}
    }
}
