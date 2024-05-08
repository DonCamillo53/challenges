export function Entry({ date, entryHeadline, entryText }) {
  return (
    <ul>
      <article>
        <h2>FEB 27, 2028</h2>
        <div className="headline-container">
          <h3>"That's life in the city"</h3>
          <img
            src="./src/assets/star-filled.svg"
            alt="Add or remove Favorites"
          />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          laudantium, illum temporibus officiis fugit consectetur totam maiores
          quas perferendis fuga deserunt? Nobis consequatur repellendus earum
          atque provident corrupti molestias veritatis!
        </p>
      </article>
    </ul>
  );
}
