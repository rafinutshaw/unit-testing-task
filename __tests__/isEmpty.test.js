import isEmpty from "../software-testing-assignment/isEmpty";

describe("isEmpty function tests", () => {

    test("for null, undefined and empty", () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
        expect(isEmpty()).toBe(true);
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
        expect(isEmpty('')).toBe(true);
        expect(isEmpty('test data')).toBe(false);
    })

    test("for arrays", () => {
        expect(isEmpty([])).toBe(true);
        expect(isEmpty([88, 75, 95])).toBe(false);
        expect(isEmpty(['test', 'data'])).toBe(false);
    });

    test("for objects", () => {
        expect(isEmpty({})).toBe(true);
        expect(isEmpty({'Month': 12})).toBe(false);
        expect(isEmpty({'Month': 'December'})).toBe(false);
    });
    
    test("for maps", () => {
        const map = new Map();
        expect(isEmpty(map)).toBe(true);

        map.set('key', 'value');
        expect(isEmpty(map)).toBe(false);

        map.delete('key');
        expect(isEmpty(map)).toBe(true);
    });

    test("for sets", () => {
        const set = new Set();
        expect(isEmpty(set)).toBe(true);

        set.add(1);
        expect(isEmpty(set)).toBe(false);

        set.delete(1);
        expect(isEmpty(set)).toBe(true);
    });

});