let data = "hamburg";

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "null":
    console.log("Null!");
    break;
  case "number":
    console.log("number!");
    break;
  case "nan":
    console.log("Not a Number!");
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("Boolean!");
    break;
  case "bigint":
    console.log("Big Int!");
    break;
  case "function":
    console.log("function!");
    break;
  case "object":
    console.log("object!");
    break;
  case "array":
    console.log("array!");
    break;
  default:
    console.log("I have no idea");
}
