import selection from './utils/selection.js';

class Timer {
	constructor(startButton, pauseButton, inputChange) {
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		this.inputChange = inputChange;

		startButton.addEventListener('click', this.start);
		pauseButton.addEventListener('click', this.pause);
	}

	start = () => {
		this.tick();
		this.interval = setInterval(this.tick, 1000);
	};
	pause = () => {
		clearInterval(this.interval);
	};
	tick = () => {
		const timeRemaining = parseFloat(this.inputChange.value);
		this.inputChange.value = timeRemaining - 1;
	};
}

const start = selection('#start');
const end = selection('#end');
const input = selection('#input');

const res = new Timer(start, end, input);
