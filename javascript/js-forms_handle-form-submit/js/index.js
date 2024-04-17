console.clear();

const form = document.querySelector('[data-js="form"]');
const submitButton = document.getElementById("submit-button");
const firstInput = document.getElementById("first-name");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  firstInput.focus();
});
