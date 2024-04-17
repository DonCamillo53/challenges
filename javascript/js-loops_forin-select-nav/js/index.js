console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--

function createOptionelement(languageSelection) {
  optionElement = document.createElement("option");
  select.append(optionElement);
  optionElement.textContent = languageSelection;
  optionElement.setAttribute("value", languageSelection.toLowerCase());
}

for (const key in languages) {
  createOptionelement(languages[key]);
}

// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--

function createNavContent(nav, key) {
  let aElement = document.createElement("a");

  ul.append(aElement);
  aElement.setAttribute("href", nav[key].href);
  aElement.textContent = nav[key].text;
}

for (const key in nav) {
  createNavContent(nav, key);
}
// --^-- write/change code here --^--
