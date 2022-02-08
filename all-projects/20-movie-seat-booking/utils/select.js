function select(selection) {
  const isSelectionValid = document.querySelector(selection);
  if (isSelectionValid) {
    return isSelectionValid;
  } else {
    throw new Error(`Your ${selection} selection is not valid`);
  }
}

export default select;
