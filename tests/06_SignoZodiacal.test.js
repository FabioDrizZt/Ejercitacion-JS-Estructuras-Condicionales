// const determinarSignoZodiacal = require('../src/SignoZodiacal')
// No longer need to import a function.

describe('Ejercicio 6: Signo Zodiacal', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  test('debe retornar "Aries" para el 21 de marzo', () => {
    process.env.DIA = '21'
    process.env.MES = '3'
    const resultado = require('../src/06_SignoZodiacal.js')
    expect(resultado).toBe('Aries')
  })

  test('debe retornar "Tauro" para el 20 de abril', () => {
    process.env.DIA = '20'
    process.env.MES = '4'
    const resultado = require('../src/06_SignoZodiacal.js')
    expect(resultado).toBe('Tauro')
  })

  test('debe retornar "Capricornio" para el 22 de diciembre', () => {
    process.env.DIA = '22'
    process.env.MES = '12'
    const resultado = require('../src/06_SignoZodiacal.js')
    expect(resultado).toBe('Capricornio')
  })

  test('debe retornar "Capricornio" para el 19 de enero', () => {
    process.env.DIA = '19'
    process.env.MES = '1'
    const resultado = require('../src/06_SignoZodiacal.js')
    expect(resultado).toBe('Capricornio')
  })
})
