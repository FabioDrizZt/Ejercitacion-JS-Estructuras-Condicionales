// const formatearFecha = require('../src/FechaNombreMes')
// No longer need to import a function.

describe('Ejercicio 5: Fecha con Nombre del Mes', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  test('debe formatear una fecha de marzo correctamente', () => {
    process.env.DIA = '15'
    process.env.MES = '3'
    process.env.ANO = '2023'
    const resultado = require('../src/05_FechaNombreMes.js')
    expect(resultado).toBe('15 de marzo de 2023')
  })

  test('debe formatear una fecha de diciembre correctamente', () => {
    process.env.DIA = '25'
    process.env.MES = '12'
    process.env.ANO = '2024'
    const resultado = require('../src/05_FechaNombreMes.js')
    expect(resultado).toBe('25 de diciembre de 2024')
  })

  test('debe formatear una fecha de enero correctamente', () => {
    process.env.DIA = '1'
    process.env.MES = '1'
    process.env.ANO = '2025'
    const resultado = require('../src/05_FechaNombreMes.js')
    expect(resultado).toBe('1 de enero de 2025')
  })
})
