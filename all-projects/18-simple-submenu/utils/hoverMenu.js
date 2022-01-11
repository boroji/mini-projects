function hoverMenu(hoverItem1, showItem2, event, addClass, removeClass) {
	hoverItem1.forEach((item) => {
		item.addEventListener(event, function(e) {
			const bounding = e.currentTarget.getBoundingClientRect();
			const center = (bounding.left + bounding.right) / 2;
			showItem2.classList.add(addClass);
			showItem2.classList.remove(removeClass);
			showItem2.style.left = `${center}px`;
		});
	});
}

export default hoverMenu;
