/* Demand-driven shrine rendering. Rituals retain their own active-frame signal. */
(() => {
  let until = performance.now() + 6000;
  let timer = 0;
  let resume = null;
  const enabled = new URLSearchParams(location.search).get('qmode') === 'saver';
  const wake = (milliseconds = 1200) => {
    until = Math.max(until, performance.now() + milliseconds);
    clearTimeout(timer);
    timer = 0;
    if (resume) resume();
  };
  window.ShrineMotion = {
    active: now => !enabled || now < until,
    wake,
    hold: milliseconds => { until = Math.max(until, performance.now() + milliseconds); },
    bind: callback => { resume = callback; },
    rest: () => {
      if (timer) return;
      // Refresh time-of-day state without maintaining an idle animation loop.
      timer = setTimeout(() => { timer = 0; wake(100); }, 30000);
    },
    pause: () => { clearTimeout(timer); timer = 0; },
  };
  for (const type of ['pointerdown', 'pointerup', 'wheel', 'keydown']) {
    document.addEventListener(type, () => wake(), { passive: true });
  }
  window.addEventListener('resize', () => wake(1800), { passive: true });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) wake(); });
  document.addEventListener('pointermove', event => {
    if (event.buttons || event.pointerType === 'touch') wake();
  }, { passive: true });
})();
