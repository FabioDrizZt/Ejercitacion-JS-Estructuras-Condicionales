const calcularCostoInternacion = require('../src/CostoInternacion')

describe('Ejercicio 7: Costo de Internación', () => {
  // Pruebas para enfermedad Tipo 1
  test('Tipo 1, paciente joven (< 14 años)', () => {
    expect(calcularCostoInternacion(1, 10, 5)).toBe(2125) // 425 * 5 = 2125
  })

  test('Tipo 1, paciente joven (entre 14 y 22 años)', () => {
    expect(calcularCostoInternacion(1, 18, 3)).toBe(1402.5) // (425 * 1.1) * 3 = 1402.5
  })

  test('Tipo 1, paciente adulto (> 22 años)', () => {
    expect(calcularCostoInternacion(1, 35, 4)).toBe(2040) // (425 * 1.2) * 4 = 2040
  })

  // Pruebas para enfermedad Tipo 2
  test('Tipo 2, paciente joven (< 14 años)', () => {
    expect(calcularCostoInternacion(2, 7, 2)).toBe(1600) // 800 * 2 = 1600
  })

  test('Tipo 2, paciente joven (entre 14 y 22 años)', () => {
    expect(calcularCostoInternacion(2, 16, 3)).toBe(2640) // (800 * 1.1) * 3 = 2640
  })

  test('Tipo 2, paciente adulto (> 22 años)', () => {
    expect(calcularCostoInternacion(2, 45, 1)).toBe(960) // (800 * 1.2) * 1 = 960
  })

  // Pruebas para enfermedad Tipo 3
  test('Tipo 3, paciente joven (< 14 años)', () => {
    expect(calcularCostoInternacion(3, 8, 4)).toBe(6000) // 1500 * 4 = 6000
  })

  test('Tipo 3, paciente joven (entre 14 y 22 años)', () => {
    expect(calcularCostoInternacion(3, 20, 2)).toBe(3300) // (1500 * 1.1) * 2 = 3300
  })

  test('Tipo 3, paciente adulto (> 22 años)', () => {
    expect(calcularCostoInternacion(3, 50, 5)).toBe(9000) // (1500 * 1.2) * 5 = 9000
  })
})
