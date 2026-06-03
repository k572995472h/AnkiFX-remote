const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

describe('effects-interface', () => {
    const effectsDir = path.join(__dirname, '..', 'src', 'effects');
    const files = fs.readdirSync(effectsDir)
        .filter(f => f.endsWith('.js') && f !== 'marquee.js' && f !== 'registry.js');

    files.forEach(file => {
        it(`effect file "${file}" adheres to the required contract`, () => {
            const id = file.replace('.js', '');
            const filePath = path.join(effectsDir, file);
            const source = fs.readFileSync(filePath, 'utf8');

            // 1. Must export "export const effect = "
            assert.ok(
                /export const effect\s*=/.test(source),
                `Effect file ${file} must export "export const effect = { ... }"`
            );

            // 2. Must define id matching filename
            const idMatch = source.match(/^\s*id:\s*['"]([^'"]+)['"]/m);
            assert.ok(idMatch, `Effect file ${file} is missing effect.id`);
            assert.equal(
                idMatch[1],
                id,
                `Effect file ${file}: effect.id "${idMatch[1]}" must match filename "${id}"`
            );

            // 3. Must define run and stop methods
            assert.ok(
                /run\s*:/.test(source),
                `Effect file ${file} must define a run method`
            );
            assert.ok(
                /stop\s*:/.test(source),
                `Effect file ${file} must define a stop method`
            );
        });
    });
});
