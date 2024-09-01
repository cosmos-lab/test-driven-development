import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  it("should return the sum of multiple numbers separated by commas", () => {
    expect(add("1,5")).toBe(6);
    expect(add("2,3,5")).toBe(10);
  });

  it("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("4\n5\n\n6")).toBe(15);
    expect(add("\n4\n5,6\n\n7")).toBe(22);
  });
});
