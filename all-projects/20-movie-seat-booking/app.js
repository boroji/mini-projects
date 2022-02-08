import select from './utils/select.js';
import selectAll from './utils/selectAll.js';

const container = select('.container');
const seats = selectAll('.row .seat:not(.occupied)');
const total = select('#total');
const count = select('#count');
