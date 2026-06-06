import { AnkiFX } from './core/engine.js';

// Record evaluation history chronologically
window.AnkiFX_Eval_History = window.AnkiFX_Eval_History || [];

const isAlreadyInitialized = window.AnkiFX && window.AnkiFX.initialized;
let isIgnored = false;
let ignoreReason = '';

if (isAlreadyInitialized) {
    isIgnored = true;
    ignoreReason = `ignored (late ${AnkiFX.source} load)`;
    console.warn(
        `[AnkiFX] Late ${AnkiFX.source} evaluation ignored. ` +
        `Active engine (${window.AnkiFX.source} v${window.AnkiFX.version}) is already running.`
    );
} else {
    const remoteVersion  = AnkiFX.version;   // from this bundle
    const localVersion   = window.AnkiFX && window.AnkiFX.version;
    const remoteIsNewer  = !localVersion || isNewerVersion(remoteVersion, localVersion);

    if (remoteIsNewer) {
        window.AnkiFX = AnkiFX; // safe: not yet initialized, remote wins
    } else {
        isIgnored = true;
        ignoreReason = 'ignored (older version)';
        console.info(
            `[AnkiFX] Remote v${remoteVersion} is not newer than ` +
            `local v${localVersion}. Keeping local bundle.`
        );
    }
}

window.AnkiFX_Eval_History.push({
    source: AnkiFX.source,
    version: AnkiFX.version,
    buildDate: AnkiFX.buildDate,
    time: new Date().toLocaleTimeString(),
    status: isIgnored ? ignoreReason : 'active'
});

function isNewerVersion(incoming, current) {
    // Clean version strings (strip trailing commit hash like 1.0.0-f3a2b -> 1.0.0)
    const clean = (v) => String(v).split('-')[0];
    const a = clean(incoming).split('.').map(Number);
    const b = clean(current).split('.').map(Number);
    for (let i = 0; i < 3; i++) {
        if ((a[i] || 0) > (b[i] || 0)) return true;
        if ((a[i] || 0) < (b[i] || 0)) return false;
    }
    return false; // equal or older -> keep local
}