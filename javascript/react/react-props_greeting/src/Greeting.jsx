export function Greeting({ name }) {
  const isCoach = "Karl";
  if (name === isCoach) {
    return <div>Welcome to this Page, Sir</div>;
  }

  return <div>Welcome to this Page, {name}</div>;
}
