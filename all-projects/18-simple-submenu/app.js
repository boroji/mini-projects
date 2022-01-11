import get from './utils/selection.js';
import hover from './utils/hoverEvent.js';
import hoverMenu from './utils/hoverMenu.js';

const nav = get('.nav');
const submenu = get('.submenu');
const btns = [
	...nav.querySelectorAll('.main-menu'),
];

hover(btns, 'mouseover', 'large-primary', 'large-secondary');
hover(btns, 'mouseout', 'large-secondary', 'large-primary');

hoverMenu(btns, submenu, 'mouseover', 'visible', 'hidden');
