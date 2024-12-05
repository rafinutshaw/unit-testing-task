import upperFirst from "../software-testing-assignment/upperFirst"

describe("upperFirst function tests", () => {

    test("null or undefined", () => {
        expect(upperFirst(undefined)).toBe('');
        expect(upperFirst(null)).toBe('');
    });

    test("all lower case", () => {
        expect(upperFirst('a')).toBe('A');
        expect(upperFirst('test')).toBe('Test');
    });

    test("all upper case", () => {
        expect(upperFirst('A')).toBe('A');
        expect(upperFirst('TEST')).toBe('TEST');
    });

    test("camel Case", () => {
        expect(upperFirst('testData')).toBe('TestData');
    });

    test("kebab case", () => {
        expect(upperFirst('test-data')).toBe('Test-data');
    });

    test("snake case", () => {
        expect(upperFirst('test_data')).toBe('Test_data');
    });

    test("empty, numbers, and special characters", () => {
        expect(upperFirst('')).toBe('');
        expect(upperFirst(' a')).toBe(' a');
        expect(upperFirst('123')).toBe('123');
        expect(upperFirst('123test')).toBe('123test');
        expect(upperFirst('#test')).toBe('#test');
        expect(upperFirst('_test')).toBe('_test');
    })

});