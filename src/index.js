import { AnkiFX } from './core/engine.js';

// Record evaluation history chronologically
window.AnkiFX_Eval_History = window.AnkiFX_Eval_History || [];
const isLateLocal = window.AnkiFX && window.AnkiFX.source === 'remote' && AnkiFX.source === 'local';

window.AnkiFX_Eval_History.push({
    source: AnkiFX.source,
    version: AnkiFX.version,
    buildDate: AnkiFX.buildDate,
    time: new Date().toLocaleTimeString(),
    status: isLateLocal ? 'ignored (late local)' : 'active'
});

if (isLateLocal) {
    console.warn(`[AnkiFX Loader] Late local engine evaluation ignored. A remote engine (Version: ${window.AnkiFX.version}) is already active.`);
} else {
    window.AnkiFX = AnkiFX;
}