describe('Ejercicio 1: Número Positivo o Negativo', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  test('debe retornar "positivo" y "par" para un número positivo y par', () => {
    process.env.NUMERO = '10'
    const resultado = require('../src/01_NumeroPositivoNegativo.js')
    expect(resultado).toEqual({ signo: 'positivo', paridad: 'par' })
  })

  test('debe retornar "positivo" y "impar" para un número positivo e impar', () => {
    process.env.NUMERO = '7'
    const resultado = require('../src/01_NumeroPositivoNegativo.js')
    expect(resultado).toEqual({ signo: 'positivo', paridad: 'impar' })
  })

  test('debe retornar "negativo" y "par" para un número negativo y par', () => {
    process.env.NUMERO = '-4'
    const resultado = require('../src/01_NumeroPositivoNegativo.js')
    expect(resultado).toEqual({ signo: 'negativo', paridad: 'par' })
  })

  test('debe retornar "negativo" y "impar" para un número negativo e impar', () => {
    process.env.NUMERO = '-5'
    const resultado = require('../src/01_NumeroPositivoNegativo.js')
    expect(resultado).toEqual({ signo: 'negativo', paridad: 'impar' })
  })

  test('debe retornar "cero" y "par" para el número 0', () => {
    process.env.NUMERO = '0'
    const resultado = require('../src/01_NumeroPositivoNegativo.js')
    expect(resultado).toEqual({ signo: 'cero', paridad: 'par' })
  })
})
