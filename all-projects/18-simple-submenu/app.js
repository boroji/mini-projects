import get from './utils/selection.js';
import hover from './utils/hoverEvent.js';
import hoverMenu from './utils/hoverMenu.js';
import closeMenu from './utils/closeMenu.js';
import data from './utils/data.js';

const nav = get('.nav');
const submenu = get('.submenu');
const btns = [
	...nav.querySelectorAll('.main-menu'),
];

hover(btns, 'mouseover', 'large-primary', 'large-secondary');
hover(btns, 'mouseout', 'large-secondary', 'large-primary');

hoverMenu(btns, submenu, 'mouseover', 'visible', 'hidden');

closeMenu(submenu, submenu, 'mouseover', 'visible', 'hidden');
closeMenu(submenu, submenu, 'mouseout', 'hidden', 'visible');

btns.forEach((item) => {
	item.addEventListener('mouseover', function(e) {
		const currentTargetID = e.currentTarget.dataset.id;
		data.forEach((item) => {
			const { links } = item;
			if (item.id === currentTargetID) {
				submenu.innerHTML = `${links
					.map((singleLink) => {
						return `<a class="large-secondary">${singleLink.label}</a>`;
					})
					.join('')}`;
			}
		});
	});
});
