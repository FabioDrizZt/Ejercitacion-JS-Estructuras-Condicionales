const ordenarValores = require('../src/OrdenarValores')

describe('Ejercicio 3: Ordenar Valores', () => {
  test('Ordena correctamente tres números positivos', () => {
    expect(ordenarValores(3, 1, 2)).toEqual([1, 2, 3])
  })

  test('Ordena correctamente con números negativos', () => {
    expect(ordenarValores(-5, 10, -15)).toEqual([-15, -5, 10])
  })

  test('Ordena correctamente con ceros', () => {
    expect(ordenarValores(0, -2, 0)).toEqual([-2, 0, 0])
  })

  test('Ordena correctamente con decimales', () => {
    expect(ordenarValores(3.5, 2.1, 2.9)).toEqual([2.1, 2.9, 3.5])
  })

  test('Mantiene el orden correcto cuando ya están ordenados', () => {
    expect(ordenarValores(1, 2, 3)).toEqual([1, 2, 3])
  })
})
