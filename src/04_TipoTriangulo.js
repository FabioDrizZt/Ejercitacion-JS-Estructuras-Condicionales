/**
 * Ejercicio 4: Tipo de Triángulo
 *
 * Enunciado:
 * Escribe una función que determine si un triángulo es isósceles, escaleno o equilátero.
 * - Equilátero: tres lados iguales
 * - Isósceles: dos lados iguales
 * - Escaleno: todos los lados diferentes
 *
 * La función debe retornar un string con el tipo de triángulo.
 *
 * Importante: Antes de determinar el tipo, verifica si las medidas pueden formar un triángulo.
 * Un triángulo es válido si la suma de dos lados cualesquiera es mayor que el tercer lado.
 * Si no es un triángulo válido, la función debe retornar "No es un triángulo".
 */

const lado1 = parseInt(process.env.LADO1, 10)
const lado2 = parseInt(process.env.LADO2, 10)
const lado3 = parseInt(process.env.LADO3, 10)

let resultado

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  if (lado1 === lado2 && lado2 === lado3) {
    resultado = 'Equilátero'
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    resultado = 'Isósceles'
  } else {
    resultado = 'Escaleno'
  }
} else {
  resultado = 'No es un triángulo'
}

module.exports = resultado
