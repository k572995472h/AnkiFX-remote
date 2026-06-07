import { AnkiFX } from './core/engine.js';

// Record evaluation history chronologically
window.AnkiFX_Eval_History = window.AnkiFX_Eval_History || [];

const currentEngine = window.AnkiFX;
const incomingVersion = AnkiFX.version;
const activeVersion = currentEngine && currentEngine.version;
const isAlreadyInitialized = currentEngine && currentEngine.initialized;

let isIgnored = false;
let ignoreReason = '';

const isNewer = !currentEngine || isNewerVersion(incomingVersion, activeVersion);

if (isNewer) {
    if (isAlreadyInitialized) {
        console.info(
            `[Loader] Newer engine version v${incomingVersion} (${AnkiFX.source}) loaded late. ` +
            `Upgrading and replacing active engine v${activeVersion} (${currentEngine.source})...`
        );
        window.AnkiFX_Loader_Logs = window.AnkiFX_Loader_Logs || [];
        window.AnkiFX_Loader_Logs.push({
            msg: `[Loader] Late takeover triggered: Upgrading active engine from v${activeVersion} to v${incomingVersion}...`,
            level: 'info'
        });
        const savedConfig = window.AnkiFX_Config;
        try {
            currentEngine.destroy();
            window.AnkiFX_Loader_Logs.push({
                msg: `[Loader] Active engine v${activeVersion} destroyed successfully.`,
                level: 'success'
            });
        } catch (e) {
            console.error(`[Loader] Error destroying old engine: ${e.message}`);
            window.AnkiFX_Loader_Logs.push({
                msg: `[Loader] Error destroying active engine: ${e.message}`,
                level: 'error'
            });
        }
        if (savedConfig) {
            window.AnkiFX_Config = savedConfig;
        }
        window.AnkiFX = AnkiFX;
        try {
            window.AnkiFX.init(window.AnkiFX_Config);
            window.AnkiFX_Loader_Logs.push({
                msg: `[Loader] Upgraded AnkiFX engine to v${incomingVersion} successfully.`,
                level: 'success'
            });
        } catch (e) {
            console.error(`[Loader] Error initializing upgraded engine: ${e.message}`);
            window.AnkiFX_Loader_Logs.push({
                msg: `[Loader] Upgraded AnkiFX engine initialization failed: ${e.message}`,
                level: 'error'
            });
        }
    } else {
        window.AnkiFX = AnkiFX;
    }
} else {
    isIgnored = true;
    ignoreReason = `ignored (older or equal version: active=${activeVersion}, incoming=${incomingVersion})`;
    console.info(
        `[Loader] Incoming engine v${incomingVersion} is not newer than active engine v${activeVersion}. Ignoring.`
    );
}

window.AnkiFX_Eval_History.push({
    source: AnkiFX.source,
    version: AnkiFX.version,
    buildDate: AnkiFX.buildDate,
    time: new Date().toLocaleTimeString(),
    status: isIgnored ? ignoreReason : 'active'
});

function parseVersion(v) {
    if (!v) return { parts: [0, 0, 0], isPre: false, preType: 3, preNumber: 0 };
    let clean = String(v).replace(/^v/, "");
    const hasBuild = clean.indexOf("+");
    if (hasBuild !== -1) clean = clean.substring(0, hasBuild);

    const hasPre = clean.indexOf("-");
    const isPre = hasPre !== -1;
    const base = isPre ? clean.substring(0, hasPre) : clean;
    const preTag = isPre ? clean.substring(hasPre + 1).toLowerCase() : "";

    const parts = base.split(".").map(p => {
        const val = parseInt(p, 10);
        return isNaN(val) ? 0 : val;
    });

    let preType = 3; // default: stable
    let preNumber = 0;
    if (isPre) {
        if (preTag.indexOf("alpha") !== -1) preType = 0;
        else if (preTag.indexOf("beta") !== -1) preType = 1;
        else if (preTag.indexOf("rc") !== -1) preType = 2;

        const numMatch = preTag.match(/\d+/);
        if (numMatch) preNumber = parseInt(numMatch[0], 10);
    }

    return {
        parts: [parts[0] || 0, parts[1] || 0, parts[2] || 0],
        isPre,
        preType,
        preNumber
    };
}

function isNewerVersion(incoming, current) {
    const a = parseVersion(incoming);
    const b = parseVersion(current);
    for (let i = 0; i < 3; i++) {
        if (a.parts[i] > b.parts[i]) return true;
        if (a.parts[i] < b.parts[i]) return false;
    }
    if (a.preType > b.preType) return true;
    if (a.preType < b.preType) return false;
    if (a.preNumber > b.preNumber) return true;
    return false;
}