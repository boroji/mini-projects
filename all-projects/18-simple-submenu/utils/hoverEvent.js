function hoverEvent(btn, event, addClass, removeClass) {
	btn.forEach((item) => {
		item.addEventListener(event, function(e) {
			const HTMLClass = e.currentTarget.classList;
			HTMLClass.add(addClass);
			HTMLClass.remove(removeClass);
		});
	});
}

export default hoverEvent;
