import map from "../software-testing-assignment/map";

describe("map", () => {
  test("maps numbers using a square function", () => {
    const square = (n) => n * n;
    const result = map([4, 8], square);
    expect(result).toEqual([16, 64]);
  });

  test("maps numbers to their double", () => {
    const double = (n) => n * 2;
    const result = map([1, 2, 3, 4], double);
    expect(result).toEqual([2, 4, 6, 8]);
  });

  test("maps an array of objects to a specific property", () => {
    const users = [
      { user: "barney", age: 36 },
      { user: "fred", age: 40 },
    ];
    const result = map(users, (user) => user.age);
    expect(result).toEqual([36, 40]);
  });

  test("uses the index argument in the iteratee", () => {
    const result = map([10, 20, 30], (value, index) => value + index);
    expect(result).toEqual([10, 21, 32]);
  });

  test("handles an empty array", () => {
    const result = map([], (value) => value);
    expect(result).toEqual([]);
  });

  test("handles `null` or `undefined` array input gracefully", () => {
    expect(map(null, (value) => value)).toEqual([]);
    expect(map(undefined, (value) => value)).toEqual([]);
  });

  test("maps an array to its length for strings", () => {
    const strings = ["apple", "banana", "cherry"];
    const result = map(strings, (str) => str.length);
    expect(result).toEqual([5, 6, 6]);
  });

  test("maps with the array itself as the third argument", () => {
    const result = map([1, 2, 3], (value, index, arr) => arr.length);
    expect(result).toEqual([3, 3, 3]);
  });
});
