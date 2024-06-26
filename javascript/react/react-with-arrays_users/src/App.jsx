import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map(({ name, id, roles, about }) => (
          <Card key={id} name={name} tag={roles[0]} about={about} />
        ))}
      </div>
    </main>
  );
}
