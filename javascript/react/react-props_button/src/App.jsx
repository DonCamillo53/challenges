import "./App.css";
import { Button } from "./Button";

export default function App() {
  return (
    <>
      <Button
        color={"#085cef"}
        disabled={false}
        text={"This is a Button"}
        handleClick={"This is a click!"}
      />
      <Button
        color={"#c0df40"}
        disabled={false}
        text={"This is also a Button"}
        handleClick={"This is also a click!"}
      />
      <Button
        color={"#fafafa"}
        disabled={true}
        text={"This is also a unabled Button"}
        handleClick={"This should not be a click!"}
      />
    </>
  );
}
