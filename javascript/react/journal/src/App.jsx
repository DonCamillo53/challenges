import { useState } from "react";
import { Header } from "./components/Header";
import { EntryForm } from "./components/EntryForm";
import { Entry } from "./components/EntryList";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import "./App.css";
import { TabBar } from "./components/TabBar";
import { Entries } from "./components/Entries";

function App() {
  const [entries, setEntries] = useLocalStorageState("entries", "");

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([{ id: uid(), date, ...newEntry }, ...entries]);
  }
  return (
    <>
      <Header />
      <main>
        <EntryForm onAddEntry={handleAddEntry} />
        <Entries />
      </main>
    </>
  );
}

export default App;
