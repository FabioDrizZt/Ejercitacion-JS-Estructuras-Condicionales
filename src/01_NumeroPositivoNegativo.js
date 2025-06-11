/**
 * Ejercicio 1: Número Positivo o Negativo
 *
 * Enunciado:
 * Escribe una función que determine si un número es positivo, negativo o cero.
 * Además, debe determinar si el número es par o impar.
 *
 * La función debe retornar un objeto con las propiedades:
 * - signo: "positivo", "negativo" o "cero"
 * - paridad: "par" o "impar" (el cero se considera par)
 */

const numero = parseInt(process.env.NUMERO, 10);

let signo;
if (numero > 0) {
  signo = "positivo";
} else if (numero < 0) {
  signo = "negativo";
} else {
  signo = "cero";
}

let paridad;
if (numero % 2 === 0) {
  paridad = "par";
} else {
  paridad = "impar";
}

const resultado = {
  signo,
  paridad,
};

module.exports = resultado;
