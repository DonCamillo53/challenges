export function EntryForm({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new formData(event.target);
    const data = Object.fromEntries(formData);
    onAddEntry(data);
    event.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>New Entry</h2>
        <label htmlFor="textInput">Motto</label>
        <input type="text" id="textInput" name="textInput" />
        <label htmlFor="textarea">Notes</label>
        <textarea id="textarea" name="textarea" rows="6"></textarea>
        <button type="submit">Create</button>
      </form>
    </>
  );
}
