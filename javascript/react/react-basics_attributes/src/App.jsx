import "./App.css";

export default function App() {
  return (
    <article className="article">
      <h1 className="article__title">Lorem ipsum Dolor </h1>
      <label htmlFor="article__input">Text</label>
      <input type="text" id="article__input" />
      <a href="www.coca-cola.de" className="article__link">
        Cocoa Cola Website
      </a>
    </article>
  );
}
