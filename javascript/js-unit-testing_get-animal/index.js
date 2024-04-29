export function getAnimal(input) {
  if (input === "cats") {
    return "I totally love cats!";
  }
  if (input === "dogs") {
    return `I like ${input}!`;
  }
  if (input === undefined) {
    return "I do not like animals at all!";
  }
}
