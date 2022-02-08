class Timer {
	constructor(startButton, pauseButton, inputChange, callbacks) {
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		this.inputChange = inputChange;
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
		}

		startButton.addEventListener('click', this.start);
		pauseButton.addEventListener('click', this.pause);
	}

	start = () => {
		if (this.onStart) {
			this.onStart(this.timeRemaning);
		}
		this.tick();
		this.interval = setInterval(this.tick, 10);
	};

	pause = () => {
		clearInterval(this.interval);
	};

	tick = () => {
		if (this.timeRemaning <= 0) {
			this.pause();
		} else {
			this.timeRemaning = this.timeRemaning - 0.01;
			if (this.onTick) {
				this.onTick();
			}
		}
	};

	get timeRemaning() {
		return parseFloat(this.inputChange.value);
	}

	set timeRemaning(v) {
		this.inputChange.value = v.toFixed(2);
	}
}

export default Timer;
