// const ordenarValores = require('../src/OrdenarValores')
// No longer need to import a function.

describe('Ejercicio 3: Ordenar Valores', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  test('debe ordenar tres números diferentes', () => {
    process.env.VALOR_A = '3'
    process.env.VALOR_B = '1'
    process.env.VALOR_C = '2'
    const resultado = require('../src/03_OrdenarValores.js')
    expect(resultado).toEqual([1, 2, 3])
  })

  test('debe manejar números negativos', () => {
    process.env.VALOR_A = '-5'
    process.env.VALOR_B = '0'
    process.env.VALOR_C = '-10'
    const resultado = require('../src/03_OrdenarValores.js')
    expect(resultado).toEqual([-10, -5, 0])
  })

  test('debe manejar números ya ordenados', () => {
    process.env.VALOR_A = '5'
    process.env.VALOR_B = '10'
    process.env.VALOR_C = '15'
    const resultado = require('../src/03_OrdenarValores.js')
    expect(resultado).toEqual([5, 10, 15])
  })
})
