import { EFFECTS } from '../../effects/registry.js';
import { startEffect } from '../effect-lifecycle.js';

/**
 * Effect picker (select dropdown) binding and associated track-switching logic.
 */
export function bindEffectSelector(state, config, overlay, background) {
    const effectSelector = document.getElementById('afx-effect-selector');
    if (!effectSelector) return;

    effectSelector.addEventListener('change', (e) => {
        const newEffect = e.target.value;
        localStorage.setItem('ankifx_preferred_effect', newEffect);

        Object.values(EFFECTS).forEach(eff => eff.stop());

        // Clear both canvases for the new effect
        if (state.ctx2D) state.ctx2D.clearRect(0, 0, state.width, state.height);
        if (state.glContext) {
            state.glContext.clearColor(0, 0, 0, 0);
            state.glContext.clear(state.glContext.COLOR_BUFFER_BIT);
        }

        config.defaultEffect = newEffect;

        if (newEffect === 'debug') {
            overlay.classList.add('afx-debug-active');
        } else {
            overlay.classList.remove('afx-debug-active');
        }

        startEffect(state, config, background, config.marqueePosition, newEffect);

        // Associated Song Switcher
        if (state.jukebox && state.jukebox.isPlaying) {
            const targetTrack = config.trackTitle || state.EFFECT_SONG_MAP[newEffect] || null;
            const currentTrack = state.jukebox.currentTrack;

            let isNewTrack = false;
            if (targetTrack) {
                if (typeof targetTrack === 'string') {
                    isNewTrack = !currentTrack || currentTrack.title.toLowerCase() !== targetTrack.toLowerCase();
                } else {
                    // Target is object { title, trackTitle, artist }
                    isNewTrack = !currentTrack ||
                        (targetTrack.title && currentTrack.title.toLowerCase() !== targetTrack.title.toLowerCase()) ||
                        (targetTrack.trackTitle && currentTrack.trackTitle.toLowerCase() !== targetTrack.trackTitle.toLowerCase()) ||
                        (targetTrack.artist && (currentTrack.artist || "").toLowerCase() !== targetTrack.artist.toLowerCase());
                }
            }

            if (isNewTrack) {
                state.jukebox.playNext(targetTrack);
            }
        }
    });
}
