console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

function createListelement(arrayElement) {
  let listElement = document.createElement("li");
  ol.append(listElement);
  listElement.textContent = arrayElement;
}

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--
for (let i = 0; i < programmingLanguages.length; i++) {
  createListelement(programmingLanguages[i]);
}
// --^-- write/change code here --^--
