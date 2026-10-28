const {readFileSync} = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
let now = 0, next = 0, wakes = 0;
const timers = new Map(), handlers = new Map();
const document = {hidden: false, addEventListener: (name, handler) => handlers.set(name, handler)};
const context = {window: {addEventListener: (name, handler) => handlers.set(name, handler)}, document, location: {search: '?qmode=saver'}, URLSearchParams,
  performance: {now: () => now},
  setTimeout: (fn, delay) => {timers.set(++next, {fn, delay}); return next;},
  clearTimeout: id => timers.delete(id)};
vm.runInNewContext(readFileSync('assets/shrine3d/motion_budget.js', 'utf8'), context);
const motion = context.window.ShrineMotion;
motion.bind(() => wakes++);
assert.equal(motion.active(1000), true);
now = 7000;
assert.equal(motion.active(now), false);
motion.rest(); motion.rest();
assert.equal(timers.size, 1, 'rest must not accumulate callbacks');
assert.equal([...timers.values()][0].delay, 30000);
handlers.get('pointerdown')();
assert.equal(wakes, 1);
assert.equal(motion.active(now), true);
assert.equal(timers.size, 0);
now = 10000;
motion.hold(2500);
assert.equal(motion.active(now + 2000), true, 'late loading and resume must get settling frames');
assert.equal(wakes, 1, 'hold must not schedule duplicate frames');
motion.rest(); motion.pause();
assert.equal(timers.size, 0, 'hidden scene must not retain periodic wake');
console.log('Shrine motion budget checks passed');

now += 5000;
handlers.get('resize')();
assert.equal(motion.active(now), true, 'resizing must redraw the backing canvas');
