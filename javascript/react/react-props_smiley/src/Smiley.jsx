export function Smiley({ isHappy }) {
  if (isHappy) {
    return <>What a happy day 😀</>;
  }
  return <> 😕</>;
}
