function isSuccess(element) {
  element.classList.add("large-success");
  element.classList.remove("large-secondary");
  element.classList.remove("large-error");

  const message = element.nextElementSibling;
  message.classList.add("hidden");
  message.classList.remove("visible");
}

export default isSuccess;
