import reduce from "../software-testing-assignment/reduce";

describe("reduce", () => {
  test("reduces an array to a sum with an initial accumulator", () => {
    const result = reduce([1, 2, 3, 4], (sum, n) => sum + n, 0);
    expect(result).toBe(10);
  });

  test("reduces an array to a sum without an initial accumulator", () => {
    const result = reduce([1, 2, 3, 4], (sum, n) => sum + n);
    expect(result).toBe(10);
  });

  test("reduces an object to an array of keys grouped by values", () => {
    const result = reduce(
      { a: 1, b: 2, c: 1 },
      (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
      },
      {}
    );
    expect(result).toEqual({ 1: ["a", "c"], 2: ["b"] });
  });

  test("reduces an array to a product", () => {
    const result = reduce([1, 2, 3, 4], (product, n) => product * n, 1);
    expect(result).toBe(24);
  });

  test("reduces an array of strings to a concatenated string", () => {
    const result = reduce(["a", "b", "c"], (concat, char) => concat + char, "");
    expect(result).toBe("abc");
  });

  test("reduces an array of objects to a single object", () => {
    const array = [
      { id: 1, value: "a" },
      { id: 2, value: "b" },
    ];
    const result = reduce(
      array,
      (acc, obj) => {
        acc[obj.id] = obj.value;
        return acc;
      },
      {}
    );
    expect(result).toEqual({ 1: "a", 2: "b" });
  });

  test("reduces an empty array with an initial accumulator", () => {
    const result = reduce([], (sum, n) => sum + n, 0);
    expect(result).toBe(0);
  });

  test("reduces an empty object with an initial accumulator", () => {
    const result = reduce({}, (sum, n) => sum + n, 0);
    expect(result).toBe(0);
  });

  test("reduces an empty array without an initial accumulator", () => {
    const result = () => reduce([], (sum, n) => sum + n);
    expect(result).toThrow(TypeError); // No initial accumulator in empty array
  });

  test("reduces an object to a count of values", () => {
    const obj = { a: 1, b: 1, c: 2 };
    const result = reduce(
      obj,
      (acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
      },
      {}
    );
    expect(result).toEqual({ 1: 2, 2: 1 });
  });
});
