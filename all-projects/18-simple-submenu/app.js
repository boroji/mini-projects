import get from './utils/selection.js';
import hover from './utils/hoverEvent.js';

const nav = get('.nav');
const submenu = get('.submenu');
const btns = [
	...nav.querySelectorAll('.main-menu'),
];

hover(btns, 'mouseover', 'large-primary', 'large-secondary');
hover(btns, 'mouseout', 'large-secondary', 'large-primary');

btns.forEach((item) => {
	item.addEventListener('mouseover', function(e) {
		const bounding = e.currentTarget.getBoundingClientRect();
		const center = (bounding.left + bounding.right) / 2;
		submenu.classList.add('visible');
		submenu.classList.remove('hidden');
		submenu.style.left = `${center}px`;
	});
});
