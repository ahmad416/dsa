import {StringReverse} from "./string_reverse";

const stringReverse = new StringReverse();

test('Method One', function () {
    expect(stringReverse.methodOne("Hello World!")).toBe("!dlroW olleH");
});
test('Method Second', function () {
    expect(stringReverse.methodTwo("Hello World!")).toBe("!dlroW olleH");
});
test('Method Third', function () {
    expect(stringReverse.methodThree("Hello World!")).toBe("!dlroW olleH");
});
