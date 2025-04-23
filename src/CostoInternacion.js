/**
 * Ejercicio 7: Costo de Internación
 *
 * Enunciado:
 * Un hospital necesita calcular el costo total de internación de un paciente
 * según el tipo de enfermedad que padece.
 *
 * - Tipo 1: El costo base diario es $425. Enfermedades asociadas: resfríos, gripes.
 * - Tipo 2: El costo base diario es $800. Enfermedades asociadas: traumatismo, fracturas.
 * - Tipo 3: El costo base diario es $1500. Enfermedades asociadas: afecciones cardíacas.
 *
 * Además:
 * - Si el paciente tiene entre 14 y 22 años (inclusive), se aplica un recargo del 10%.
 * - Si el paciente tiene más de 22 años, se aplica un recargo del 20%.
 *
 * La función debe retornar el costo total de internación (costo diario ajustado * días).
 */

function calcularCostoInternacion (tipoEnfermedad, edad, dias) {
  // Implementa tu solución aquí
  // tipoEnfermedad: número (1, 2 o 3)
  // edad: número entero positivo
  // dias: número entero positivo (días de internación)
}

module.exports = calcularCostoInternacion
