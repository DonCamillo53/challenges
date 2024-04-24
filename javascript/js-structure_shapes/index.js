console.clear();
import { RandomColor } from "./utils/randomColor.js";
import { Circle } from "./utils/Circle.js";

const root = document.getElementById("root");

const circle = Circle(RandomColor());

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = RandomColor();
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = RandomColor();
});

root.append(circle, square, pentagon);
