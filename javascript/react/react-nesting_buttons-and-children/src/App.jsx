import "./App.css";

export default function App() {
  return (
    <main>
      <Button children={"Test"}></Button>
      <Button children={"Test 2"}></Button>
      <Button children={"Test3"}></Button>
      <Button children={"Test 4"}></Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
