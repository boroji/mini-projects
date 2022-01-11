function closeMenu(hoverItem1, showItem2, event, addClass, removeClass) {
	hoverItem1.addEventListener(event, function() {
		showItem2.classList.add(addClass);
		showItem2.classList.remove(removeClass);
	});
}

export default closeMenu;
