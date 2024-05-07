export default function Box({ color }) {
  return <div className="box" style={{ backgroundColor: color }}></div>;
}

export function Boxes() {
  return (
    <div>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </div>
  );
}
