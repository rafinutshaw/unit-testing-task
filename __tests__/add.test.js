import add from "../software-testing-assignment/add";

describe("add function tests", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("handles negative numbers", () => {
    expect(add(-1, -2)).toBe(-3);
    expect(add(-1, 2)).toBe(1);
  });

  test("handles floating-point numbers", () => {
    expect(add(1.5, 2.5)).toBe(4);
    expect(add(1.1, 2.2)).toBeCloseTo(3.3, 5); // Handles floating-point precision
  });

  test("returns NaN when one or both inputs are non-numeric", () => {
    expect(add("1", 2)).toBeNaN();
    expect(add(null, 2)).toBeNaN();
    expect(add(undefined, 2)).toBeNaN();
    expect(add({}, 2)).toBeNaN();
    expect(add([], 2)).toBeNaN();
    expect(add(1, "a")).toBeNaN();
    expect(add(1, null)).toBeNaN();
  });

  test("returns 0 when no arguments are provided", () => {
    expect(add()).toBe(0);
  });

  test("returns the correct result even when only one argument is provided", () => {
    expect(add(1)).toBe(1);
  });

  test("ignores extra arguments beyond the first two", () => {
    expect(add(1, 2, 3, 4)).toBe(3);
  });

  test("handles large numbers", () => {
    expect(add(1_000_000, 2_000_000)).toBe(3_000_000);
  });
});
