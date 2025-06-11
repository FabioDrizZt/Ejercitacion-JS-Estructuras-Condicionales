/**
 * Ejercicio 3: Ordenar Valores
 *
 * Enunciado:
 * Escribe una función que reciba tres valores diferentes y los devuelva
 * ordenados de menor a mayor.
 *
 * La función debe retornar un array con los tres valores ordenados.
 */

const a = parseInt(process.env.VALOR_A, 10)
const b = parseInt(process.env.VALOR_B, 10)
const c = parseInt(process.env.VALOR_C, 10)

const valores = [a, b, c]
valores.sort((x, y) => x - y)

module.exports = valores
