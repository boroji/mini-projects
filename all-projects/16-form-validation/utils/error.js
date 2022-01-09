function isError(element, errorMessage = "Please try again later") {
  element.classList.add("large-error");
  element.classList.remove("large-secondary");
  element.classList.remove("large-success");

  const message = element.nextElementSibling;
  message.textContent = errorMessage;
  message.classList.add("visible");
  message.classList.remove("hidden");
}

export default isError;
