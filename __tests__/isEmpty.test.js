import isEmpty from "../software-testing-assignment/isEmpty"
import upperFirst from "../software-testing-assignment/upperFirst";

describe("isEmpty function tests", () => {

    test("for null", () => {
        expect(isEmpty(null)).toBe(true);
    });

    test("for boolean values", () => {
        expect(isEmpty(true)).toBe(true);
        expect(isEmpty(false)).toBe(true);
    });

    test("for numeric values", () => {
        expect(isEmpty(1080)).toBe(true);
        expect(isEmpty(558.676)).toBe(true);
        expect(isEmpty(-94)).toBe(true);
    });

    test("for strings", () => {
        expect(isEmpty('test data')).toBe(false);
    })

    test("for arrays", () => {
        expect(isEmpty([88, 75, 95])).toBe(false);
        expect(isEmpty(['test', 'data'])).toBe(false);
    });

    test("for objects", () => {
        expect(isEmpty({'Month': 12})).toBe(false);
        expect(isEmpty({'Month': 'December'})).toBe(false);
    });

});