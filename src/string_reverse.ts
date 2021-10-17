export class StringReverse{
    methodOne(str: string): string {
        return str.split("").reverse().join("");
    }

    methodTwo(str: string): string {
        let result = "";
        for (let character of str) {
            result = character + result
        }
        return result;
    }

    methodThree(str: string): string {
        return str.split("").reduce((res, character) => character + res);
    }
}