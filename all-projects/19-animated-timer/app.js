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
		console.log('this is starting');
	};
	pause = () => {
		console.log('This is pausing');
	};
}

const start = selection('#start');
const end = selection('#end');
const input = selection('#input');

const res = new Timer(start, end, input);
