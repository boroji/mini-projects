function select(selection) {
	const isSelectionValid = document.querySelectorAll(selection);
	if (isSelectionValid) {
		return isSelectionValid;
	} else {
		throw new Error(`Your ${selection} selection is not valid`);
	}
}

export default select;
