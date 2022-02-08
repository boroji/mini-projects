class Timer {
	constructor(startButton, pauseButton, inputChange, callbacks) {
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		this.inputChange = inputChange;
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}

		startButton.addEventListener('click', this.start);
		pauseButton.addEventListener('click', this.pause);
	}

	start = () => {
		if (this.onStart) {
			this.onStart();
		}
		this.tick();
		this.interval = setInterval(this.tick, 1000);
	};

	pause = () => {
		clearInterval(this.interval);
	};

	tick = () => {
		if (this.timeRemaning <= 0) {
			this.pause();
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			this.timeRemaning = this.timeRemaning - 1;
			if (this.onTick) {
				this.onTick();
			}
		}
	};

	get timeRemaning() {
		return parseFloat(this.inputChange.value);
	}

	set timeRemaning(v) {
		this.inputChange.value = v;
	}
}

export default Timer;
