export function EntryForm() {
  return (
    <>
      <form action="">
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
