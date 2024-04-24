export const Circle = function createCircle(colorValue) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = colorValue;
  });
  return circle;
};
