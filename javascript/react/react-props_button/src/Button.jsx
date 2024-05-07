export function Button({ color, disabled, text, handleClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={() => {
        console.log({ handleClick });
      }}
    >
      {text}
    </button>
  );
}
