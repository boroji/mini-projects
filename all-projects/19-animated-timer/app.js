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
		if (this.timeRemaning <= 0) {
			this.pause();
		} else {
			this.timeRemaning = this.timeRemaning - 1;
		}
	};

	get timeRemaning() {
		return parseFloat(this.inputChange.value);
	}

	set timeRemaning(v) {
		this.inputChange.value = v;
	}
}

const start = selection('#start');
const end = selection('#end');
const input = selection('#input');

const res = new Timer(start, end, input);
