const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// --- Helper to extract the Meta Layer Versioning script from an HTML template ---
function extractVersioningScript(filePath) {
    const html = fs.readFileSync(filePath, 'utf8');
    // Find the script tag immediately following #afx-update-banner-root
    const marker = 'id="afx-update-banner-root"></div>';
    const markerIdx = html.indexOf(marker);
    if (markerIdx === -1) throw new Error('Could not find update banner root in ' + filePath);
    
    const startScriptIdx = html.indexOf('<script>', markerIdx);
    const endScriptIdx = html.indexOf('</script>', startScriptIdx);
    if (startScriptIdx === -1 || endScriptIdx === -1) {
        throw new Error('Could not find script block after banner root in ' + filePath);
    }
    
    return html.substring(startScriptIdx + 8, endScriptIdx);
}

describe('Template Versioning System - Pure Logic', () => {
    let isNewer;

    it('extracts and parses comparison logic correctly', () => {
        const scriptCode = extractVersioningScript(path.join(__dirname, '../build/card templates/front_mcq.html'));
        
        // Expose internal functions by locating the end of requestIdleCallback callback and injecting assignments
        const iifeIdx = scriptCode.lastIndexOf('})();');
        if (iifeIdx === -1) throw new Error('Could not find end of IIFE');
        const cbCloseIdx = scriptCode.lastIndexOf('});', iifeIdx);
        if (cbCloseIdx === -1) throw new Error('Could not find requestIdleCallback callback closing');
        
        const modifiedScript = scriptCode.substring(0, cbCloseIdx) +
            'window.parseVersion = parseVersion; window.isNewer = isNewer;\n});' +
            scriptCode.substring(cbCloseIdx + 3);
            
        const mockWindow = {
            requestIdleCallback: (cb) => cb(),
            requestAnimationFrame: (cb) => cb(),
            fetch: () => new Promise(() => {}), // Return pending promise to prevent network activity or XHR fallback
            AbortController: global.AbortController || function() { this.signal = {}; }
        };
        mockWindow.window = mockWindow;
        
        const mockContext = {
            window: mockWindow,
            document: {
                getElementById: (id) => {
                    if (id === 'ankifx-template-meta') {
                        return {
                            getAttribute: (attr) => {
                                if (attr === 'data-template-version') return '1.0.0';
                                if (attr === 'data-template-name') return 'front_mcq';
                                return '';
                            }
                        };
                    }
                    return null;
                }
            },
            sessionStorage: { getItem: () => null }, // Do not dismiss so requestIdleCallback completes and registers functions
            localStorage: { getItem: () => null },
            setTimeout: () => {},
            clearTimeout: () => {},
            AbortController: global.AbortController || function() { this.signal = {}; }
        };
        
        vm.runInNewContext(modifiedScript, mockContext);
        
        isNewer = mockContext.window.isNewer;
        assert.equal(typeof isNewer, 'function');
    });

    describe('isNewer semantic version comparison', () => {
        it('compares standard components correctly', () => {
            assert.ok(isNewer('1.2.0', '1.10.0'), '1.10.0 is newer than 1.2.0');
            assert.ok(!isNewer('1.10.0', '1.2.0'), '1.2.0 is not newer than 1.10.0');
            assert.ok(!isNewer('1.2.0', '1.2.0'), 'Equal versions are not newer');
        });

        it('handles missing components', () => {
            assert.ok(isNewer('1.2', '1.2.1'), '1.2.1 is newer than 1.2');
            assert.ok(!isNewer('1.2.1', '1.2'), '1.2 is not newer than 1.2.1');
            assert.ok(!isNewer('1.2', '1.2'), 'Equal versions with missing patch are not newer');
        });

        it('ignores leading v and build tags', () => {
            assert.ok(isNewer('v1.0.0', 'v1.0.1+build.123'), 'Build tag is ignored');
            assert.ok(!isNewer('v1.0.1+build.123', 'v1.0.1'), 'Build tags are equal');
        });

        it('respects pre-release tag hierarchy (alpha < beta < rc < stable)', () => {
            assert.ok(isNewer('1.0.0-alpha', '1.0.0-beta'), 'beta is newer than alpha');
            assert.ok(isNewer('1.0.0-beta', '1.0.0-rc'), 'rc is newer than beta');
            assert.ok(isNewer('1.0.0-rc', '1.0.0'), 'stable is newer than rc');
            assert.ok(!isNewer('1.0.0', '1.0.0-rc'), 'rc is older than stable');
            assert.ok(!isNewer('1.0.0-beta', '1.0.0-alpha'), 'alpha is older than beta');
        });

        it('compares pre-release numbers', () => {
            assert.ok(isNewer('1.0.0-beta.1', '1.0.0-beta.2'), 'beta.2 is newer than beta.1');
            assert.ok(!isNewer('1.0.0-beta.2', '1.0.0-beta.1'), 'beta.1 is older than beta.2');
        });

        it('handles invalid versions safely', () => {
            assert.equal(isNewer('invalid', '1.0.0'), true, 'Invalid is treated as 0.0.0, so 1.0.0 is newer');
            assert.equal(isNewer('1.0.0', 'invalid'), false, 'invalid is 0.0.0, which is older');
            assert.doesNotThrow(() => isNewer(null, undefined));
        });
    });
});

describe('Template Versioning System - DOM & Network Integration', () => {
    it('injects update banner when remote version is newer', (t) => {
        return new Promise((resolve, reject) => {
            const scriptCode = extractVersioningScript(path.join(__dirname, '../build/card templates/front_mcq.html'));
            
            let bannerInjected = false;
            let injectedContent = '';
            
            const mockWindow = {
                requestIdleCallback: (cb) => cb(),
                requestAnimationFrame: (cb) => cb(),
                fetch: (url) => {
                    try {
                        assert.ok(url.includes('_afx_version.json'));
                    } catch (e) {
                        reject(e);
                    }
                    return Promise.resolve({
                        status: 200,
                        text: () => Promise.resolve(JSON.stringify({
                            latestTemplateVersion: "1.1.0",
                            templates: {
                                front_mcq: "1.1.0"
                            },
                            changelog: "New visual themes"
                        }))
                    });
                },
                AbortController: global.AbortController || function() {
                    this.signal = {};
                }
            };
            mockWindow.window = mockWindow;

            const mockContext = {
                window: mockWindow,
                document: {
                    getElementById: (id) => {
                        if (id === 'ankifx-template-meta') {
                            return {
                                getAttribute: (attr) => {
                                    if (attr === 'data-template-version') return '1.0.0'; // Local is older
                                    if (attr === 'data-template-name') return 'front_mcq';
                                    return '';
                                }
                            };
                        }
                        if (id === 'afx-update-banner-root') {
                            return {
                                appendChild: (el) => {
                                    try {
                                        bannerInjected = true;
                                        injectedContent = el.innerHTML;
                                        
                                        // Assertions on injected DOM elements
                                        assert.ok(injectedContent.includes('Template Update Available'));
                                        assert.ok(injectedContent.includes('v1.0.0'));
                                        assert.ok(injectedContent.includes('v1.1.0'));
                                        assert.ok(injectedContent.includes('New visual themes'));
                                        resolve();
                                    } catch (e) {
                                        reject(e);
                                    }
                                }
                            };
                        }
                        return null;
                    },
                    createElement: (tag) => {
                        if (tag === 'style') {
                            return { id: '', textContent: '' };
                        }
                        return {
                            className: '',
                            innerHTML: '',
                            querySelector: (sel) => {
                                return { addEventListener: () => {} };
                            },
                            classList: { add: () => {} },
                            addEventListener: () => {}
                        };
                    },
                    head: {
                        appendChild: () => {}
                    }
                },
                sessionStorage: {
                    getItem: () => null,
                    setItem: () => {}
                },
                localStorage: {
                    getItem: () => null,
                    setItem: () => {}
                },
                setTimeout: (cb) => cb(),
                clearTimeout: () => {},
                AbortController: global.AbortController || function() {
                    this.signal = {};
                },
                XMLHttpRequest: class {
                    open() {}
                    send() {}
                    abort() {}
                }
            };
            
            try {
                vm.runInNewContext(scriptCode, mockContext);
            } catch (e) {
                reject(e);
            }
        });
    });

    it('fails silently and does not warn if network is unreachable', (t) => {
        return new Promise((resolve, reject) => {
            const scriptCode = extractVersioningScript(path.join(__dirname, '../build/card templates/front_mcq.html'));
            
            let bannerInjected = false;
            
            const mockWindow = {
                requestIdleCallback: (cb) => cb(),
                requestAnimationFrame: (cb) => cb(),
                fetch: () => Promise.reject(new Error('Network offline')),
                AbortController: global.AbortController || function() {
                    this.signal = {};
                }
            };
            mockWindow.window = mockWindow;

            const mockContext = {
                window: mockWindow,
                document: {
                    getElementById: (id) => {
                        if (id === 'ankifx-template-meta') {
                            return {
                                getAttribute: (attr) => {
                                    if (attr === 'data-template-version') return '1.0.0';
                                    if (attr === 'data-template-name') return 'front_mcq';
                                    return '';
                                }
                            };
                        }
                        if (id === 'afx-update-banner-root') {
                            return {
                                appendChild: () => {
                                    bannerInjected = true;
                                }
                            };
                        }
                        return null;
                    },
                    createElement: () => ({ classList: { add: () => {} } }),
                    head: { appendChild: () => {} }
                },
                sessionStorage: { getItem: () => null },
                localStorage: { getItem: () => null },
                setTimeout: (cb) => cb(),
                clearTimeout: () => {},
                AbortController: global.AbortController || function() {
                    this.signal = {};
                },
                XMLHttpRequest: class {
                    open() {}
                    send() {
                        if (this.onerror) {
                            try {
                                this.onerror();
                            } catch (e) {
                                reject(e);
                            }
                        }
                    }
                    abort() {}
                }
            };
            
            try {
                vm.runInNewContext(scriptCode, mockContext);
                
                // Wait a tick to confirm no injection occurred
                setTimeout(() => {
                    try {
                        assert.ok(!bannerInjected, 'Banner should not be injected if update check fails');
                        resolve();
                    } catch (e) {
                        reject(e);
                    }
                }, 10);
            } catch (e) {
                reject(e);
            }
        });
    });
});
