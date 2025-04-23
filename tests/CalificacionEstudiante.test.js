const asignarCalificacion = require('../src/CalificacionEstudiante')

describe('Ejercicio 9: Calificación de Estudiante', () => {
  test('Nota 0 recibe calificación F', () => {
    expect(asignarCalificacion(0)).toBe('F')
  })

  test('Nota 59 recibe calificación F', () => {
    expect(asignarCalificacion(59)).toBe('F')
  })

  test('Nota 60 recibe calificación D', () => {
    expect(asignarCalificacion(60)).toBe('D')
  })

  test('Nota 69 recibe calificación D', () => {
    expect(asignarCalificacion(69)).toBe('D')
  })

  test('Nota 70 recibe calificación C', () => {
    expect(asignarCalificacion(70)).toBe('C')
  })

  test('Nota 79 recibe calificación C', () => {
    expect(asignarCalificacion(79)).toBe('C')
  })

  test('Nota 80 recibe calificación B', () => {
    expect(asignarCalificacion(80)).toBe('B')
  })

  test('Nota 89 recibe calificación B', () => {
    expect(asignarCalificacion(89)).toBe('B')
  })

  test('Nota 90 recibe calificación A', () => {
    expect(asignarCalificacion(90)).toBe('A')
  })

  test('Nota 100 recibe calificación A', () => {
    expect(asignarCalificacion(100)).toBe('A')
  })

  test('Nota negativa recibe mensaje de error', () => {
    expect(asignarCalificacion(-10)).toBe('Nota inválida')
  })

  test('Nota mayor a 100 recibe mensaje de error', () => {
    expect(asignarCalificacion(150)).toBe('Nota inválida')
  })
})
