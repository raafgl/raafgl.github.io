// Web Audio API Synthesizer for UI interactions and click feedback

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a minimal metallic "tick" sound typical of brutalist/high-end interfaces.
 */
export function playTick() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.08);

    gainNode.gain.setValueAtTime(0.06, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  } catch (error) {
    // Fail silently if browser blocks or doesn't support
    console.debug('Audio interaction blocked or unsupported');
  }
}

/**
 * Plays a diagnostic high-to-low confirm sound.
 */
export function playSuccess() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode1 = ctx.createGain();
    const gainNode2 = ctx.createGain();

    // First tone
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(600, now);
    osc1.frequency.exponentialRampToValueAtTime(1200, now + 0.15);
    gainNode1.gain.setValueAtTime(0.04, now);
    gainNode1.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc1.connect(gainNode1);
    gainNode1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.16);

    // Second tone delayed
    setTimeout(() => {
      try {
        const delayedNow = ctx.currentTime;
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(1200, delayedNow);
        gainNode2.gain.setValueAtTime(0.05, delayedNow);
        gainNode2.gain.exponentialRampToValueAtTime(0.001, delayedNow + 0.2);

        osc2.connect(gainNode2);
        gainNode2.connect(ctx.destination);
        osc2.start(delayedNow);
        osc2.stop(delayedNow + 0.21);
      } catch (e) {}
    }, 120);

  } catch (error) {
    console.debug('Audio interaction blocked or unsupported');
  }
}

/**
 * Plays a low-pitched hum for hover triggers or background ambience shifts.
 */
export function playHover() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.setValueAtTime(250, now + 0.05);

    gainNode.gain.setValueAtTime(0.03, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.07);
  } catch (error) {
    console.debug('Audio interaction blocked or unsupported');
  }
}
