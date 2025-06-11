// const calcularCostoInternacion = require('../src/CostoInternacion')
// No longer need to import a function.

describe('Ejercicio 7: Costo de Internación', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  test('debe calcular el costo para paciente joven (14-22 años) con enfermedad tipo 1', () => {
    process.env.TIPO_ENFERMEDAD = '1'
    process.env.EDAD = '18'
    process.env.DIAS = '5'
    const resultado = require('../src/07_CostoInternacion.js')
    expect(resultado).toBe(425 * 1.10 * 5)
  })

  test('debe calcular el costo para paciente mayor de 22 con enfermedad tipo 2', () => {
    process.env.TIPO_ENFERMEDAD = '2'
    process.env.EDAD = '30'
    process.env.DIAS = '3'
    const resultado = require('../src/07_CostoInternacion.js')
    expect(resultado).toBe(800 * 1.20 * 3)
  })

  test('debe calcular el costo para paciente menor de 14 sin recargo', () => {
    process.env.TIPO_ENFERMEDAD = '3'
    process.env.EDAD = '10'
    process.env.DIAS = '2'
    const resultado = require('../src/07_CostoInternacion.js')
    expect(resultado).toBe(1500 * 1.00 * 2)
  })
})
