// const determinarEstado = require('../src/InstitucionEducacion')
// No longer need to import a function.

describe('Ejercicio 2: Institución de Educación', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  test('estudiante diurno con nota suficiente debe estar "Aprobado"', () => {
    process.env.NOTA = '4.5'
    process.env.CARRERA = 'diurna'
    const estado = require('../src/02_InstitucionEducacion.js')
    expect(estado).toBe('Aprobado')
  })

  test('estudiante diurno con nota insuficiente debe estar "Reprobado"', () => {
    process.env.NOTA = '3.9'
    process.env.CARRERA = 'diurna'
    const estado = require('../src/02_InstitucionEducacion.js')
    expect(estado).toBe('Reprobado')
  })

  test('estudiante vespertino con nota alta debe estar "Aprobado"', () => {
    process.env.NOTA = '4.0'
    process.env.CARRERA = 'vespertina'
    const estado = require('../src/02_InstitucionEducacion.js')
    expect(estado).toBe('Aprobado')
  })

  test('estudiante vespertino con nota intermedia debe estar en "Recuperación"', () => {
    process.env.NOTA = '3.7'
    process.env.CARRERA = 'vespertina'
    const estado = require('../src/02_InstitucionEducacion.js')
    expect(estado).toBe('Recuperación')
  })

  test('estudiante vespertino con nota baja debe estar "Reprobado"', () => {
    process.env.NOTA = '3.4'
    process.env.CARRERA = 'vespertina'
    const estado = require('../src/02_InstitucionEducacion.js')
    expect(estado).toBe('Reprobado')
  })
})
