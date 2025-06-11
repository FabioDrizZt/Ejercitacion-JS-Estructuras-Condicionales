// const determinarTipoTriangulo = require('../src/TipoTriangulo')
// No longer need to import a function.

describe('Ejercicio 4: Tipo de Triángulo', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  test('debe retornar "Equilátero" para tres lados iguales', () => {
    process.env.LADO1 = '10'
    process.env.LADO2 = '10'
    process.env.LADO3 = '10'
    const resultado = require('../src/04_TipoTriangulo.js')
    expect(resultado).toBe('Equilátero')
  })

  test('debe retornar "Isósceles" para dos lados iguales', () => {
    process.env.LADO1 = '10'
    process.env.LADO2 = '10'
    process.env.LADO3 = '5'
    const resultado = require('../src/04_TipoTriangulo.js')
    expect(resultado).toBe('Isósceles')
  })

  test('debe retornar "Escaleno" para todos los lados diferentes', () => {
    process.env.LADO1 = '10'
    process.env.LADO2 = '12'
    process.env.LADO3 = '14'
    const resultado = require('../src/04_TipoTriangulo.js')
    expect(resultado).toBe('Escaleno')
  })

  test('debe retornar "No es un triángulo" si las medidas no forman un triángulo', () => {
    process.env.LADO1 = '1'
    process.env.LADO2 = '2'
    process.env.LADO3 = '10'
    const resultado = require('../src/04_TipoTriangulo.js')
    expect(resultado).toBe('No es un triángulo')
  })
})
