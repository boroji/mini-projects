import get from './utils/selection.js';
import hover from './utils/hoverEvent.js';

const nav = get('.nav');
const btns = [
	...nav.querySelectorAll('.main-menu'),
];

hover(btns, 'mouseover', 'large-primary', 'large-secondary');
hover(btns, 'mouseout', 'large-secondary', 'large-primary');
