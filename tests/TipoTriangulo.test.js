const determinarTipoTriangulo = require('../src/TipoTriangulo')

describe('Ejercicio 4: Tipo de Triángulo', () => {
  test('Identifica correctamente un triángulo equilátero', () => {
    expect(determinarTipoTriangulo(5, 5, 5)).toBe('Equilátero')
  })

  test('Identifica correctamente un triángulo isósceles con dos lados iguales', () => {
    expect(determinarTipoTriangulo(5, 5, 8)).toBe('Isósceles')
  })

  test('Identifica correctamente un triángulo isósceles con dos lados iguales (diferente orden)', () => {
    expect(determinarTipoTriangulo(5, 8, 5)).toBe('Isósceles')
  })

  test('Identifica correctamente un triángulo isósceles con dos lados iguales (otro orden)', () => {
    expect(determinarTipoTriangulo(8, 5, 5)).toBe('Isósceles')
  })

  test('Identifica correctamente un triángulo escaleno', () => {
    expect(determinarTipoTriangulo(3, 4, 5)).toBe('Escaleno')
  })

  test('Detecta cuando no se puede formar un triángulo (un lado muy largo)', () => {
    expect(determinarTipoTriangulo(1, 2, 10)).toBe('No es un triángulo')
  })

  test('Detecta cuando no se puede formar un triángulo (suma exacta)', () => {
    expect(determinarTipoTriangulo(5, 10, 5)).toBe('No es un triángulo')
  })

  test('Detecta cuando no se puede formar un triángulo (lado negativo)', () => {
    expect(determinarTipoTriangulo(-1, 4, 5)).toBe('No es un triángulo')
  })

  test('Detecta cuando no se puede formar un triángulo (lado cero)', () => {
    expect(determinarTipoTriangulo(0, 4, 5)).toBe('No es un triángulo')
  })
})
