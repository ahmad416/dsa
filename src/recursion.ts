export class Factorial{
    method1(num: number): number {
        return num < 2 ? 1: num * this.method1(num - 1);
    }

    method2(num: number): number {
        let product = 1;
        for (let i = 2; i <= num; i++) {
            product *= i;
        }
        return product;
    }
}