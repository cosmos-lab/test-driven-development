function add(numbers) {
  if (!numbers) return 0;
  let delimiter = /[\n,]/;
  return numbers
    .split(delimiter)
    .map(Number)
    .reduce((a, b) => a + b, 0);
}

export { add };
