import selection from './utils/selection.js';
import Timer from './utils/timer.js';

const start = selection('#start');
const end = selection('#end');
const input = selection('#input');
const progress = selection('#progress');

let duration;
const res = new Timer(start, end, input, {
	onStart(totalDuration) {
		duration = totalDuration;
	},
	onTick() {
		progress.style.width = `${input.value}%`;
	},
});
