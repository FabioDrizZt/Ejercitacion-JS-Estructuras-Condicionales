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
let paridad;

// Implementa tu solución aquí para determinar el signo y la paridad

const resultado = {
  signo,
  paridad,
};

module.exports = resultado;
