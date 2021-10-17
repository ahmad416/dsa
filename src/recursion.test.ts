import {Factorial} from "./recursion";

test('Factorial', () => {
    const factorial = new Factorial();
    expect(factorial.method1(0)).toBe(1);
    expect(factorial.method1(4)).toBe(24);

    const methodOne = factorial.method1(5);
    const methodTwo = factorial.method2(5);

    expect(methodOne).toEqual(methodTwo);
})