let animationId = null;
let currentW, currentH;
let debugContainer = null;

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
    },
    controls: [
        {
            type: 'button',
            id: 'copy-logs-btn',
            label: '📋 COPY LOGS',
            onClick: () => {
                copyLogsToClipboard();
            }
        }
    ]
};

export function runDebug(contexts, config) {
    // Prevent duplicate containers (failsafe)
    if (debugContainer) {
        debugContainer.remove();
        debugContainer = null;
    }

    const actualDpr = contexts.dpr || 1;
    currentW = contexts.width;
    currentH = contexts.height;

    // Create main container
    debugContainer = document.createElement('div');
    debugContainer.className = 'afx-debug-container';

    // Columns structure
    const cols = document.createElement('div');
    cols.className = 'afx-debug-columns';
    debugContainer.appendChild(cols);

    const leftCol = document.createElement('div');
    leftCol.className = 'afx-debug-left-col';
    cols.appendChild(leftCol);

    const rightCol = document.createElement('div');
    rightCol.className = 'afx-debug-right-col';
    cols.appendChild(rightCol);

    // Left Column Panels
    // 1. Viewport & Layout Info
    const viewportPanel = document.createElement('div');
    viewportPanel.className = 'afx-debug-panel viewport-info';
    viewportPanel.innerHTML = '<h3>Viewport & Layout</h3>';
    const viewportContent = document.createElement('pre');
    viewportContent.className = 'afx-debug-content';
    viewportPanel.appendChild(viewportContent);
    leftCol.appendChild(viewportPanel);

    // 2. Engine Diagnostics
    const diagnosticsPanel = document.createElement('div');
    diagnosticsPanel.className = 'afx-debug-panel diagnostics';
    diagnosticsPanel.innerHTML = '<h3>AnkiFX Diagnostics</h3>';
    const diagnosticsContent = document.createElement('pre');
    diagnosticsContent.className = 'afx-debug-content';
    diagnosticsPanel.appendChild(diagnosticsContent);
    leftCol.appendChild(diagnosticsPanel);

    // Right Column Panels
    // 3. Engine Evaluation History
    const historyPanel = document.createElement('div');
    historyPanel.className = 'afx-debug-panel history';
    historyPanel.innerHTML = '<h3>Evaluation History</h3>';
    const historyContent = document.createElement('div');
    historyContent.className = 'afx-debug-content';
    historyPanel.appendChild(historyContent);
    rightCol.appendChild(historyPanel);

    // 4. Chronological Loader Logs
    const logsPanel = document.createElement('div');
    logsPanel.className = 'afx-debug-panel logs';
    logsPanel.innerHTML = '<h3>Chronological Loader Logs</h3>';
    const logsContent = document.createElement('div');
    logsContent.className = 'afx-debug-content';
    logsPanel.appendChild(logsContent);
    rightCol.appendChild(logsPanel);

    // Corner Markers
    const corners = {
        topLeft: document.createElement('div'),
        topRight: document.createElement('div'),
        bottomLeft: document.createElement('div'),
        bottomRight: document.createElement('div')
    };
    corners.topLeft.className = 'afx-debug-corner top-left';
    corners.topRight.className = 'afx-debug-corner top-right';
    corners.bottomLeft.className = 'afx-debug-corner bottom-left';
    corners.bottomRight.className = 'afx-debug-corner bottom-right';
    corners.bottomLeft.style.bottom = 'auto';
    corners.bottomRight.style.bottom = 'auto';

    Object.values(corners).forEach(el => debugContainer.appendChild(el));

    // Lines & Labels
    const visibleLine = document.createElement('div');
    visibleLine.className = 'afx-debug-line visible-bottom';
    const visibleLabel = document.createElement('span');
    visibleLabel.className = 'afx-debug-line-label';
    visibleLabel.textContent = '--- VISIBLE DOCUMENT BOTTOM ---';
    visibleLine.appendChild(visibleLabel);
    debugContainer.appendChild(visibleLine);

    // Append main container to contexts.canvas2D.parentElement (ankifx-background)
    const parentEl = contexts.canvas2D.parentElement || document.body;
    parentEl.appendChild(debugContainer);

    let lastTime = 0;
    let frameCount = 0;
    let fps = 0;

    // Reconciliation cache keys to prevent unneeded textContent/innerHTML writes
    let lastViewportText = '';
    let lastDiagnosticsText = '';
    let lastHistoryKey = '';
    let lastLogsKey = '';
    let lastCornersText = '';

    function render(timestamp) {
        if (timestamp === undefined) timestamp = performance.now();
        if (!lastTime) lastTime = timestamp;
        frameCount++;
        if (timestamp - lastTime >= 1000) {
            fps = frameCount;
            frameCount = 0;
            lastTime = timestamp;
        }

        // Draw dark background on 2D canvas
        const ctx = contexts.ctx2d;
        ctx.clearRect(0, 0, currentW, currentH);
        ctx.fillStyle = '#050508';
        ctx.fillRect(0, 0, currentW, currentH);

        // Update Viewport & Layout Metrics
        const style = getComputedStyle(document.documentElement);
        const ioHeader = style.getPropertyValue('--io-header') || 'N/A';
        const ioHeaderVal = parseInt(style.getPropertyValue('--io-header')) || 0;
        const topInset = style.getPropertyValue('--top-inset') || 'N/A';
        const bottomInset = style.getPropertyValue('--bottom-inset') || 'N/A';
        const bgEl = document.getElementById('ankifx-background');
        const resolvedViewportHeight = bgEl ? bgEl.getBoundingClientRect().height : 'N/A';
        const isLandscape = window.innerWidth > window.innerHeight;
        const visibleH = document.documentElement.clientHeight + ioHeaderVal;

        const viewportText = [
            `window:               ${window.innerWidth}x${window.innerHeight}`,
            `screen:               ${screen.width}x${screen.height}`,
            `doc:                  ${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`,
            `orient:               ${window.orientation || 'N/A'}`,
            `dpr (native|engine):  (${window.devicePixelRatio}|${actualDpr})`,
            `--io-header:          ${ioHeader}`,
            `--top-inset:          ${topInset}`,
            `--bottom-inset:       ${bottomInset}`,
            `--afx-viewport-height: calc(100dvh + ${ioHeaderVal}px) = ${resolvedViewportHeight}px`,
            `isLandscape:          ${isLandscape}`
        ].join('\n');

        if (viewportText !== lastViewportText) {
            viewportContent.textContent = viewportText;
            lastViewportText = viewportText;
        }

        // Update Diagnostics
        const diagnosticsText = [
            `Version:  ${window.AnkiFX?.version || '1.0.0-dev'}`,
            `Source:   ${window.AnkiFX?.source || 'unknown'}`,
            `Built:    ${window.AnkiFX?.buildDate || 'development'}`
        ].join('\n');

        if (diagnosticsText !== lastDiagnosticsText) {
            diagnosticsContent.textContent = diagnosticsText;
            lastDiagnosticsText = diagnosticsText;
        }

        // Update Evaluation History
        const history = window.AnkiFX_Eval_History || [];
        const historyKey = JSON.stringify(history);
        if (historyKey !== lastHistoryKey) {
            historyContent.innerHTML = '';
            if (history.length === 0) {
                const emptyMsg = document.createElement('div');
                emptyMsg.textContent = '(No evaluation history captured)';
                emptyMsg.style.color = '#888';
                emptyMsg.style.fontStyle = 'italic';
                historyContent.appendChild(emptyMsg);
            } else {
                history.slice(-3).forEach((h, idx) => {
                    const line = document.createElement('div');
                    line.textContent = `[${idx + 1}] ${h.source} (${h.version}) @ ${h.time} - ${h.status}`;
                    line.style.color = h.status === 'active' ? '#55ff55' : '#ffaa55';
                    historyContent.appendChild(line);
                });
            }
            lastHistoryKey = historyKey;
        }

        // Update Loader Logs
        const logs = window.AnkiFX_Loader_Logs || [];
        const logsKey = JSON.stringify(logs);
        if (logsKey !== lastLogsKey) {
            logsContent.innerHTML = '';
            if (logs.length === 0) {
                const emptyMsg = document.createElement('div');
                emptyMsg.textContent = '(No logs captured by template loader)';
                emptyMsg.style.color = '#888';
                emptyMsg.style.fontStyle = 'italic';
                logsContent.appendChild(emptyMsg);
            } else {
                logs.slice(-12).forEach((log, idx) => {
                    const line = document.createElement('div');
                    line.textContent = `[${idx + 1}] ${log}`;
                    const isError = log.includes('fail') || log.includes('Error') || log.includes('offline') || log.includes('warn');
                    line.style.color = isError ? '#ff5555' : '#55ff55';
                    logsContent.appendChild(line);
                });
            }
            lastLogsKey = logsKey;
        }

        // Update Corner Markers text
        const cornersText = `${currentW}x${visibleH}`;
        if (cornersText !== lastCornersText) {
            corners.topLeft.textContent = `(0,0)`;
            corners.topRight.textContent = `(${currentW},0)`;
            corners.bottomLeft.textContent = `(0,${visibleH})`;
            corners.bottomRight.textContent = `(${currentW},${visibleH})`;
            corners.bottomLeft.style.top = `${visibleH - 18}px`;
            corners.bottomRight.style.top = `${visibleH - 18}px`;
            lastCornersText = cornersText;
        }

        // Update Line Positions
        visibleLine.style.top = `${visibleH}px`;

        animationId = requestAnimationFrame(render);
    }

    render();
}

export function stopDebug() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    if (debugContainer) {
        debugContainer.remove();
        debugContainer = null;
    }
}

function copyLogsToClipboard() {
    const container = document.querySelector('.afx-debug-container');
    if (!container) return;

    let text = '=== ANKIFX DEBUG LOGS ===\n\n';

    const panels = container.querySelectorAll('.afx-debug-panel');
    panels.forEach(panel => {
        const title = panel.querySelector('h3')?.textContent || '';
        const contentEl = panel.querySelector('.afx-debug-content');
        if (contentEl) {
            text += `--- ${title.toUpperCase()} ---\n`;
            text += contentEl.innerText || contentEl.textContent || '';
            text += '\n\n';
        }
    });

    const writeToClipboard = () => {
        try {
            const textArea = document.createElement('textarea');
            textArea.value = text.trim();
            textArea.style.position = 'fixed';
            textArea.style.top = '0';
            textArea.style.left = '0';
            textArea.style.opacity = '0';
            textArea.style.pointerEvents = 'none';
            document.body.appendChild(textArea);
            
            textArea.focus();
            textArea.select();
            
            const success = document.execCommand('copy');
            document.body.removeChild(textArea);
            
            if (success) {
                return Promise.resolve();
            }
        } catch (e) {
            // silent fallback
        }

        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
            return navigator.clipboard.writeText(text.trim());
        } else {
            return Promise.reject(new Error('No copy method succeeded or is available'));
        }
    };

    writeToClipboard().then(() => {
        const btn = document.getElementById('afx-control-copy-logs-btn');
        if (btn) {
            const oldLabel = btn.textContent;
            btn.textContent = '✅ COPIED!';
            setTimeout(() => {
                btn.textContent = oldLabel;
            }, 1500);
        }
    }).catch(err => {
        const btn = document.getElementById('afx-control-copy-logs-btn');
        if (btn) {
            const oldLabel = btn.textContent;
            btn.textContent = '❌ ERROR';
            setTimeout(() => {
                btn.textContent = oldLabel;
            }, 1500);
        }
    });
}
