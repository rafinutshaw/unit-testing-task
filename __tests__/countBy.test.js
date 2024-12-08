import countBy from "../software-testing-assignment/countBy";

describe("countBy", () => {
  test("counts by a simple boolean condition on an array", () => {
    const users = [
      { user: "barney", active: true },
      { user: "betty", active: true },
      { user: "fred", active: false },
    ];
    const result = countBy(users, (value) => value.active);
    expect(result).toEqual({ true: 2, false: 1 });
  });

  test("counts by a numeric condition on an array", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = countBy(numbers, (n) => (n % 2 === 0 ? "even" : "odd"));
    expect(result).toEqual({ odd: 3, even: 3 });
  });

  test("counts by a string property in an array of objects", () => {
    const fruits = [{ type: "apple" }, { type: "banana" }, { type: "apple" }];
    const result = countBy(fruits, (fruit) => fruit.type);
    expect(result).toEqual({ apple: 2, banana: 1 });
  });

  test("handles an object as input", () => {
    const data = { a: 1, b: 2, c: 3, d: 4 };
    const result = countBy(data, (value) => (value % 2 === 0 ? "even" : "odd"));
    expect(result).toEqual({ odd: 2, even: 2 });
  });

  test("handles an empty object", () => {
    const result = countBy({}, (value) => value);
    expect(result).toEqual({});
  });

  test("counts with a custom string transformer function", () => {
    const words = ["apple", "banana", "cherry", "apricot"];
    const result = countBy(words, (word) => word[0]);
    expect(result).toEqual({ a: 2, b: 1, c: 1 });
  });
});
