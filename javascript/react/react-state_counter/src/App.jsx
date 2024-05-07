import { useState } from "react";
import "./App.css";

export default function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCount(--count);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            console.log(count);
            setCount(++count);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
