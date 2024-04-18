console.clear();

// `while` loop

let number = Math.random();
let count = 0;

// --v-- write/change code here --v--
while (number <= 0.9) {
  console.log("I am still counting...");
  count++;
}
// --^-- write/change code here --^--

console.log(
  `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
);
