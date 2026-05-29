
let animationId = null;
let currentW, currentH;
let erudaCaptureListener = null;
const captureEvents = ['touchstart', 'touchend', 'mousedown', 'mouseup', 'pointerdown', 'pointerup', 'click'];

function isErudaEvent(e) {
    if (!e) return false;
    const path = e.composedPath ? e.composedPath() : [];
    for (let i = 0; i < path.length; i++) {
        const target = path[i];
        if (!target) continue;
        if (target.id === 'ankifx-eruda-container') return true;
        if (target.tagName === 'ERUDA') return true;
        if (typeof target.className === 'string' && target.className.includes('eruda')) return true;
        if (target.classList && typeof target.classList.contains === 'function') {
            if (target.classList.contains('eruda-entry-btn') || target.classList.contains('eruda-container')) {
                return true;
            }
        }
    }
    return false;
}

export const effect = {
    id: 'debug',
    name: 'DEBUG',
    run: runDebug,
    stop: stopDebug,
    onResize: (w, h) => {
        currentW = w;
        currentH = h;
    },
    marqueeFont: {
        color: '#00ff00',
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowBlur: 5
    }
};

export function runDebug(contexts, config) {
    const ctx = contexts.ctx2d;
    currentW = contexts.width;
    currentH = contexts.height;

    // Load/show Eruda on mobile inside the DEBUG effect
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        let erudaContainer = document.getElementById('ankifx-eruda-container');
        if (!erudaContainer) {
            erudaContainer = document.createElement('div');
            erudaContainer.id = 'ankifx-eruda-container';
            erudaContainer.style.position = 'fixed';
            erudaContainer.style.zIndex = '2147483647';
            erudaContainer.style.top = '0';
            erudaContainer.style.left = '0';
            erudaContainer.style.width = '100%';
            erudaContainer.style.height = '100%';
            erudaContainer.style.pointerEvents = 'none';
            document.body.appendChild(erudaContainer);
        } else {
            erudaContainer.style.display = 'block';
        }

        // Capture-phase document listener: fires BEFORE any other handler,
        // catches Eruda events and prevents them from reaching the overlay
        // or Anki's card flip handler
        if (!erudaCaptureListener) {
            erudaCaptureListener = (e) => {
                if (isErudaEvent(e)) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            };
            captureEvents.forEach(evtName => {
                document.addEventListener(evtName, erudaCaptureListener, { capture: true, passive: false });
            });
        }

        const initEruda = () => {
            if (window.eruda) {
                try {
                    const isInitialized = window.eruda._isInit || window.__ERUDA_INITIALIZED__;
                    if (!isInitialized) {
                        window.eruda.init({
                            container: erudaContainer,
                            useShadowDom: true
                        });
                        window.__ERUDA_INITIALIZED__ = true;
                        window.eruda.position({ x: 20, y: 20 });

                        // Force pointer-events on Eruda's shadow DOM entry button
                        // so taps reach it despite the container being pointer-events: none
                        try {
                            const shadowRoot = erudaContainer.querySelector('eruda')?.shadowRoot
                                || erudaContainer.shadowRoot;
                            if (shadowRoot) {
                                const style = document.createElement('style');
                                style.textContent = `
                                    .eruda-entry-btn { pointer-events: auto !important; touch-action: manipulation !important; }
                                    .eruda-container { pointer-events: auto !important; }
                                `;
                                shadowRoot.appendChild(style);
                            }
                        } catch (styleErr) {
                            console.warn("Eruda: Could not inject pointer-events override:", styleErr);
                        }

                        // Flush all pre-load logs into the Eruda console panel
                        if (window.AnkiFX_Loader_Logs && !window.__ERUDA_LOGS_FLUSHED__) {
                            window.__ERUDA_LOGS_FLUSHED__ = true;
                            window.AnkiFX_Loader_Logs.forEach(log => {
                                console.log("[Pre-load] " + log);
                            });
                        }
                    }
                    window.eruda.show();
                } catch (e) {
                    console.error("Eruda init error:", e);
                }
            }
        };

        if (!window.eruda) {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/eruda';
            script.onload = initEruda;
            document.head.appendChild(script);
        } else {
            initEruda();
        }
    }

    function render() {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, currentW, currentH);


        // Current Crosshair (Center)
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.5)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(currentW / 2, 0); ctx.lineTo(currentW / 2, currentH);
        ctx.moveTo(0, currentH / 2); ctx.lineTo(currentW, currentH / 2);
        ctx.stroke();
        ctx.fillStyle = '#0ff';
        ctx.fillText(`CENTER: ${Math.floor(currentW/2)},${Math.floor(currentH/2)}`, currentW/2 + 5, currentH/2 - 5);

        // Draw Viewport Info
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 13px monospace';
        const info = [
            `window: ${window.innerWidth}x${window.innerHeight}`,
            `screen: ${screen.width}x${screen.height}`,
            `dpr: ${window.devicePixelRatio}`,
            `doc: ${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`,
            `orient: ${window.orientation || 'N/A'}`
        ];
        info.forEach((text, i) => {
            ctx.fillText(text, 20, 90 + i * 18);
        });

        // Draw AnkiFX Engine Diagnostics
        ctx.fillStyle = '#0f0';
        ctx.font = 'bold 13px monospace';
        ctx.fillText('--- AnkiFX DIAGNOSTICS ---', 20, 195);
        ctx.fillStyle = '#fff';
        ctx.font = '12px monospace';
        ctx.fillText(`Version:  ${window.AnkiFX?.version || '1.0.0-dev'}`, 20, 215);
        ctx.fillText(`Source:   ${window.AnkiFX?.source || 'unknown'}`, 20, 230);
        ctx.fillText(`Built:    ${window.AnkiFX?.buildDate || 'development'}`, 20, 245);

        // Draw Chronological Loader Logs
        ctx.fillStyle = '#0ff';
        ctx.font = 'bold 13px monospace';
        ctx.fillText('--- CHRONOLOGICAL LOADER LOGS ---', 20, 280);

        const logs = window.AnkiFX_Loader_Logs || [];
        if (logs.length === 0) {
            ctx.fillStyle = '#888';
            ctx.font = 'italic 12px monospace';
            ctx.fillText('(No logs captured by template loader)', 20, 300);
        } else {
            ctx.font = '11px monospace';
            logs.slice(-12).forEach((log, idx) => {
                const isError = log.includes('fail') || log.includes('Error') || log.includes('offline') || log.includes('warn');
                ctx.fillStyle = isError ? '#ff5555' : '#55ff55';
                ctx.fillText(`[${idx + 1}] ${log}`, 20, 300 + idx * 16);
            });
        }

        // Corner Markers
        ctx.fillStyle = '#f0f';
        ctx.font = 'bold 12px monospace';
        ctx.fillText(`(0,0)`, 5, 15);
        ctx.fillText(`(${currentW},0)`, currentW - 65, 15);
        ctx.fillText(`(0,${currentH})`, 5, currentH - 5);
        ctx.fillText(`(${currentW},${currentH})`, currentW - 65, currentH - 5);

        // Bottom Edge Warning
        ctx.strokeStyle = '#f00';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(0, currentH - 2);
        ctx.lineTo(currentW, currentH - 2);
        ctx.stroke();
        
        ctx.fillStyle = '#f00';
        ctx.font = 'bold 18px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('--- CANVAS BOTTOM ---', currentW / 2, currentH - 10);
        ctx.textAlign = 'left';

        // Right Edge Warning
        ctx.beginPath();
        ctx.moveTo(currentW - 2, 0);
        ctx.lineTo(currentW - 2, currentH);
        ctx.stroke();

        animationId = requestAnimationFrame(render);
    }

    render();
}

export function stopDebug() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    if (window.eruda) {
        try { window.eruda.hide(); } catch(e) {}
    }
    const erudaContainer = document.getElementById('ankifx-eruda-container');
    if (erudaContainer) {
        erudaContainer.style.display = 'none';
    }
    if (erudaCaptureListener) {
        captureEvents.forEach(evtName => {
            document.removeEventListener(evtName, erudaCaptureListener, { capture: true });
        });
        erudaCaptureListener = null;
    }
}
