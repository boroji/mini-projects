import selection from './utils/selection.js';
import Timer from './utils/timer.js';

const start = selection('#start');
const end = selection('#end');
const input = selection('#input');

const res = new Timer(start, end, input, {
	onStart() {
		console.log('start');
	},
	onTick() {
		console.log('tick');
	},
	onComplete() {
		console.log('end');
	},
});
