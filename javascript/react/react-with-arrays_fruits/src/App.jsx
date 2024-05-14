import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "🍇 Grapes",
      color: "purple",
    },
    {
      id: 1340,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1341,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 1342,
      name: "🍍 Pineapple",
      color: "yellow",
    },
  ];
  return (
    <>
      {fruits.map(({ id, name }) => (
        <div className="app">
          <Card key={id} name={name} />
        </div>
      ))}
    </>
  );
}
