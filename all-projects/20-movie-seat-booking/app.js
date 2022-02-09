import select from './utils/select.js';
import selectAll from './utils/selectAll.js';

const container = select('.container');
const seats = selectAll('.row .seat:not(.occupied)');
const total = select('#total');
const count = select('#count');
const avengers = select('#avengers');

const v = parseInt(avengers.value);

container.addEventListener('click', e => {
	if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
		e.target.classList.toggle('selected');
	}
});
