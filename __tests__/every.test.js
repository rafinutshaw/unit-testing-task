import every from "../software-testing-assignment/every";

describe("every", () => {
  test("returns true for an array where all elements satisfy the predicate", () => {
    const result = every([2, 4, 6], (n) => n % 2 === 0);
    expect(result).toBe(true);
  });

  test("returns false for an array where some elements do not satisfy the predicate", () => {
    const result = every([2, 3, 6], (n) => n % 2 === 0);
    expect(result).toBe(false);
  });

  test("returns true for an empty array regardless of the predicate", () => {
    const result = every([], (n) => n % 2 === 0);
    expect(result).toBe(true);
  });

  test("works with a predicate checking for truthy values", () => {
    const result = every([true, 1, "yes"], Boolean);
    expect(result).toBe(true);
  });

  test("returns false when the predicate checks for falsy values", () => {
    const result = every([true, 1, null, "yes"], Boolean);
    expect(result).toBe(false);
  });

  test("uses the index argument in the predicate", () => {
    const result = every([10, 20, 30], (value, index) => value > index);
    expect(result).toBe(true);
  });

  test("uses the array argument in the predicate", () => {
    const result = every(
      [1, 2, 3],
      (value, index, arr) => value < arr.length + 3
    );
    expect(result).toBe(true);
  });

  test("handles `null` or `undefined` input gracefully", () => {
    expect(every(null, Boolean)).toBe(true);
    expect(every(undefined, Boolean)).toBe(true);
  });

  test("works with a predicate that always returns false", () => {
    const result = every([1, 2, 3], () => false);
    expect(result).toBe(false);
  });

  test("works with a predicate that always returns true", () => {
    const result = every([1, 2, 3], () => true);
    expect(result).toBe(true);
  });
});
