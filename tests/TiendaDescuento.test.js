const calcularMontoFinal = require('../src/TiendaDescuento')

describe('Ejercicio 8: Tienda de Descuento', () => {
  test('Bolita blanca (0% descuento)', () => {
    expect(calcularMontoFinal(1000, 'blanca')).toBe(1000)
  })

  test('Bolita verde (10% descuento)', () => {
    expect(calcularMontoFinal(2000, 'verde')).toBe(1800)
  })

  test('Bolita amarilla (25% descuento)', () => {
    expect(calcularMontoFinal(800, 'amarilla')).toBe(600)
  })

  test('Bolita azul (50% descuento)', () => {
    expect(calcularMontoFinal(500, 'azul')).toBe(250)
  })

  test('Bolita roja (100% descuento)', () => {
    expect(calcularMontoFinal(1500, 'roja')).toBe(0)
  })

  test('Funciona con decimales', () => {
    expect(calcularMontoFinal(199.99, 'verde')).toBeCloseTo(179.99, 2)
  })
})
