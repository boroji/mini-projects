import get from './utils/selection.js';

const nav = get('.nav');
const btns = [
	...nav.querySelectorAll('.main-menu'),
];

btns.forEach((item) => {
	item.addEventListener('mouseover', function(e) {
		const HTMLClass = e.currentTarget.classList;
		HTMLClass.add('large-primary');
		HTMLClass.remove('large-secondary');
	});
	item.addEventListener('mouseout', function(e) {
		const HTMLClass = e.currentTarget.classList;
		HTMLClass.remove('large-primary');
		HTMLClass.add('large-secondary');
	});
});
