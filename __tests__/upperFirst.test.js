import upperFirst from "../software-testing-assignment/upperFirst"

describe("upperFirst function tests", () => {

    test("all lower case", () => {
        expect(upperFirst('assignment')).toBe('Assignment');
    });

    test("all upper case", () => {
        expect(upperFirst('ASSIGNMENT')).toBe('ASSIGNMENT');
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

});