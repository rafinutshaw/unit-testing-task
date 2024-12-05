import toString from "../software-testing-assignment/toString";

describe("toString function tests", () => {

    test("null and undefined", () => {
        expect(toString(null)).toBe('null');
        expect(toString(undefined)).toBe('undefined');
    });

    test("numbers to string", () => {
        expect(toString(586)).toBe('586');
        expect(toString(-68)).toBe('-68');
    });

    test("arrays to string", () => {
        expect(toString([6, 85, 105])).toBe('6,85,105');
    });

    test("mix of alphanumeric and special characters to string", () => {
        expect(toString(35+87)).toBe('35+87');
        expect(toString(dummy^55)).toBe('dummy^55');
    });

    test("boolean to string", () => {
        expect(toString(true)).toBe('true');
        expect(toString(false)).toBe('false');
    });

});