function add(numbers) {
  if (!numbers) return 0;
  return numbers
    .split(",")
    .map(Number)
    .reduce((a, b) => a + b, 0);
}

export { add };
