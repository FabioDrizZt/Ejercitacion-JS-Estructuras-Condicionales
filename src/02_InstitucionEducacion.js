/**
 * Ejercicio 2: Institución de Educación
 *
 * Enunciado:
 * Una institución educativa necesita un programa que determine el estado de los
 * estudiantes según su nota de presentación y su carrera.
 *
 * - Para estudiantes de carrera diurna:
 *   - Si la nota es mayor o igual a 4.0, el estado es "Aprobado"
 *   - Si la nota es menor a 4.0, el estado es "Reprobado"
 *
 * - Para estudiantes de carrera vespertina:
 *   - Si la nota es mayor o igual a 4.0, el estado es "Aprobado"
 *   - Si la nota está entre 3.5 y 3.9, el estado es "Recuperación"
 *   - Si la nota es menor a 3.5, el estado es "Reprobado"
 *
 * La función debe retornar el estado del estudiante como un string.
 */

const nota = parseFloat(process.env.NOTA)
const carrera = process.env.CARRERA

let estado
if (carrera === 'diurna') {
  if (nota >= 4.0) {
    estado = 'Aprobado'
  } else {
    estado = 'Reprobado'
  }
} else if (carrera === 'vespertina') {
  if (nota >= 4.0) {
    estado = 'Aprobado'
  } else if (nota >= 3.5) {
    estado = 'Recuperación'
  } else {
    estado = 'Reprobado'
  }
}

module.exports = estado
