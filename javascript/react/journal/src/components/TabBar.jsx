import { entries } from "./userEntries";
export function TabBar() {
  return (
    <ul className="tab-bar">
      <li>
        Entries <p className="entry-counter">{entries.length}</p>
      </li>
      <li>
        Favorites <p className="entry-counter">3</p>
      </li>
    </ul>
  );
}
