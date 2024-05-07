import { Entries } from "./Entries.jsx";
import { EntryForm } from "./EntryForm.jsx";

export function MainSection() {
  return (
    <main>
      <EntryForm />
      <Entries />
    </main>
  );
}
