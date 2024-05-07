import "./App.css";

export default function App() {
  return <HelloWorldArticle />;
}

export function HelloWorldArticle() {
  return (
    <article>
      <h1>This is a Header</h1>
      <p>And this is the Paragraph</p>
    </article>
  );
}
