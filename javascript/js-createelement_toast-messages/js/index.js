console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

const addLi = document.createElement("li");

function addMessage() {
  const addLi = document.createElement("li");
  toastContainer.append(addLi);
  addLi.textContent = "This is a Toast Message";
  addLi.classList.add("toast-container__message");
}
function deleteMessage() {
  toastContainer.innerHTML = "";
}
addButton.addEventListener("click", () => {
  addMessage();

  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  deleteMessage();
  // Exercise: Clear the stack of toast messages
});
