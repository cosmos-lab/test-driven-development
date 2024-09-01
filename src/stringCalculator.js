function add(numbers) {
  if (!numbers) return 0;
  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const delimiterLineIndex = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.substring(2, delimiterLineIndex), "g");
    numbers = numbers.substring(delimiterLineIndex + 1);
  }

  const numberArray = numbers.split(delimiter).filter(Boolean).map(Number);
  return numberArray.reduce((a, b) => a + b, 0);
}

export { add };
