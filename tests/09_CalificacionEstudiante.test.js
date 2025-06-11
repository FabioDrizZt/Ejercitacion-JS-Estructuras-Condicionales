// const asignarCalificacion = require('../src/CalificacionEstudiante')
// No longer need to import a function.

describe('Ejercicio 9: Calificación de Estudiante', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  test('debe retornar "A" para notas entre 90 y 100', () => {
    process.env.NOTA = '95'
    const resultado = require('../src/09_CalificacionEstudiante.js')
    expect(resultado).toBe('A')
  })

  test('debe retornar "B" para notas entre 80 y 89', () => {
    process.env.NOTA = '85'
    const resultado = require('../src/09_CalificacionEstudiante.js')
    expect(resultado).toBe('B')
  })

  test('debe retornar "C" para notas entre 70 y 79', () => {
    process.env.NOTA = '75'
    const resultado = require('../src/09_CalificacionEstudiante.js')
    expect(resultado).toBe('C')
  })

  test('debe retornar "D" para notas entre 60 y 69', () => {
    process.env.NOTA = '65'
    const resultado = require('../src/09_CalificacionEstudiante.js')
    expect(resultado).toBe('D')
  })

  test('debe retornar "F" para notas entre 0 y 59', () => {
    process.env.NOTA = '55'
    const resultado = require('../src/09_CalificacionEstudiante.js')
    expect(resultado).toBe('F')
  })

  test('debe retornar "Nota inválida" para notas fuera de rango', () => {
    process.env.NOTA = '101'
    let resultado = require('../src/09_CalificacionEstudiante.js')
    expect(resultado).toBe('Nota inválida')

    jest.resetModules()

    process.env.NOTA = '-5'
    resultado = require('../src/09_CalificacionEstudiante.js')
    expect(resultado).toBe('Nota inválida')
  })
})
