import { useState } from "react";
import ColoredNumber from "./ColoredNumber";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  function counterAdd() {
    setCount(++count);
  }
  function counterSubstract() {
    setCount(--count);
  }
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={counterAdd}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={counterSubstract}
        >
          -
        </button>
      </div>
    </div>
  );
}
