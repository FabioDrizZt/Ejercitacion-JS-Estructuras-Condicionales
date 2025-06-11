// const calcularMontoFinal = require('../src/TiendaDescuento')
// No longer need to import a function.

describe('Ejercicio 8: Tienda de Descuento', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  test('debe aplicar 0% de descuento para bolita blanca', () => {
    process.env.VALOR_COMPRA = '100'
    process.env.COLOR_BOLITA = 'blanca'
    const resultado = require('../src/08_TiendaDescuento.js')
    expect(resultado).toBe(100)
  })

  test('debe aplicar 10% de descuento para bolita verde', () => {
    process.env.VALOR_COMPRA = '100'
    process.env.COLOR_BOLITA = 'verde'
    const resultado = require('../src/08_TiendaDescuento.js')
    expect(resultado).toBe(90)
  })

  test('debe aplicar 25% de descuento para bolita amarilla', () => {
    process.env.VALOR_COMPRA = '100'
    process.env.COLOR_BOLITA = 'amarilla'
    const resultado = require('../src/08_TiendaDescuento.js')
    expect(resultado).toBe(75)
  })

  test('debe aplicar 50% de descuento para bolita azul', () => {
    process.env.VALOR_COMPRA = '100'
    process.env.COLOR_BOLITA = 'azul'
    const resultado = require('../src/08_TiendaDescuento.js')
    expect(resultado).toBe(50)
  })

  test('debe aplicar 100% de descuento para bolita roja', () => {
    process.env.VALOR_COMPRA = '100'
    process.env.COLOR_BOLITA = 'roja'
    const resultado = require('../src/08_TiendaDescuento.js')
    expect(resultado).toBe(0)
  })
})
