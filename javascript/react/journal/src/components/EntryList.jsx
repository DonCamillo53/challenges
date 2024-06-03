import { entries } from "./userEntries";
export function Entry({ id, date, motto, notes }) {
  return (
    <ul className="entry-list">
      {entries.map(({ id, date, motto, notes }) => (
        <li key={id}>
          <article>
            <h2>{date}</h2>
            <div className="headline-container">
              <h3>{motto}</h3>
              <img
                src="./src/assets/star-filled.svg"
                alt="Add or remove Favorites"
              />
            </div>
            <p>{notes}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
