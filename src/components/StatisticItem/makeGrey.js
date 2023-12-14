export function makeGray() {
  const grayValue = Math.floor(Math.random() * 156 + 100);
  return `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
}
