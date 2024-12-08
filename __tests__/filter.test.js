import filter from "../software-testing-assignment/filter";

describe("filter", () => {
  test("filters an array based on a property", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
      { user: "betty", active: true },
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([
      { user: "barney", active: true },
      { user: "betty", active: true },
    ]);
  });

  test("filters numbers based on a condition", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = filter(numbers, (n) => n % 2 === 0);
    expect(result).toEqual([2, 4, 6]);
  });

  test("filters strings based on length", () => {
    const strings = ["short", "tiny", "adequate", "lengthy"];
    const result = filter(strings, (str) => str.length > 5);
    expect(result).toEqual(["adequate", "lengthy"]);
  });

  test("handles an empty array", () => {
    const result = filter([], (value) => value);
    expect(result).toEqual([]);
  });

  test("returns an empty array when no elements match the predicate", () => {
    const numbers = [1, 3, 5];
    const result = filter(numbers, (n) => n % 2 === 0);
    expect(result).toEqual([]);
  });

  test("handles `null` or `undefined` array input gracefully", () => {
    expect(filter(null, (value) => value)).toEqual([]);
    expect(filter(undefined, (value) => value)).toEqual([]);
  });
});
