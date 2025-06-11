/**
 * Ejercicio 9: Calificación de Estudiante
 *
 * Enunciado:
 * Escribe una función que asigne una calificación a un estudiante
 * según su nota de examen final:
 *
 * - Entre 0 y 59: "F"
 * - Entre 60 y 69: "D"
 * - Entre 70 y 79: "C"
 * - Entre 80 y 89: "B"
 * - Entre 90 y 100: "A"
 *
 * Si la nota está fuera del rango 0-100, la función debe retornar "Nota inválida".
 *
 * La función debe retornar un string con la calificación.
 */

const nota = parseInt(process.env.NOTA, 10)
let calificacion

if (nota < 0 || nota > 100) {
  calificacion = 'Nota inválida'
} else if (nota >= 90) {
  calificacion = 'A'
} else if (nota >= 80) {
  calificacion = 'B'
} else if (nota >= 70) {
  calificacion = 'C'
} else if (nota >= 60) {
  calificacion = 'D'
} else {
  calificacion = 'F'
}

module.exports = calificacion
