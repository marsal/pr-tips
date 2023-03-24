// sumar.ts

export function sumar(a: number, b: number): number {
    if (isNaN(a) || isNaN(b)) {
        return NaN;
    }
    return a + b;
}
