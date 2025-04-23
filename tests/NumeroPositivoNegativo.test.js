const analizarNumero = require('../src/NumeroPositivoNegativo')

describe('Ejercicio 1: Número Positivo o Negativo', () => {
  test('Identifica correctamente un número positivo par', () => {
    expect(analizarNumero(10)).toEqual({ signo: 'positivo', paridad: 'par' })
  })

  test('Identifica correctamente un número positivo impar', () => {
    expect(analizarNumero(7)).toEqual({ signo: 'positivo', paridad: 'impar' })
  })

  test('Identifica correctamente un número negativo par', () => {
    expect(analizarNumero(-8)).toEqual({ signo: 'negativo', paridad: 'par' })
  })

  test('Identifica correctamente un número negativo impar', () => {
    expect(analizarNumero(-5)).toEqual({ signo: 'negativo', paridad: 'impar' })
  })

  test('Identifica correctamente el cero', () => {
    expect(analizarNumero(0)).toEqual({ signo: 'cero', paridad: 'par' })
  })
})
