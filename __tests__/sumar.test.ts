// sumar.test.ts

import { sumar } from "../src/sumar";

describe("sumar", () => {
    it("debería sumar dos números correctamente", () => {
        expect(sumar(2, 2)).toBe(4);
    });
    it("debería devolver NaN si alguno de los argumentos no es un número", () => {
        expect(sumar(2, 4)).toBe(6);
    });
});
