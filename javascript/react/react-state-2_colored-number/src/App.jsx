import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default function App() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(++count);
  }

  return <Counter />;
}
