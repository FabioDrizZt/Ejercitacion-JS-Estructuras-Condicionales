const formatearFecha = require('../src/FechaNombreMes')

describe('Ejercicio 5: Fecha con Nombre del Mes', () => {
  test('Formatea correctamente una fecha de enero', () => {
    expect(formatearFecha(15, 1, 2023)).toBe('15 de enero de 2023')
  })

  test('Formatea correctamente una fecha de febrero', () => {
    expect(formatearFecha(28, 2, 2023)).toBe('28 de febrero de 2023')
  })

  test('Formatea correctamente una fecha de marzo', () => {
    expect(formatearFecha(1, 3, 2023)).toBe('1 de marzo de 2023')
  })

  test('Formatea correctamente una fecha de abril', () => {
    expect(formatearFecha(30, 4, 2023)).toBe('30 de abril de 2023')
  })

  test('Formatea correctamente una fecha de mayo', () => {
    expect(formatearFecha(5, 5, 2023)).toBe('5 de mayo de 2023')
  })

  test('Formatea correctamente una fecha de junio', () => {
    expect(formatearFecha(12, 6, 2023)).toBe('12 de junio de 2023')
  })

  test('Formatea correctamente una fecha de julio', () => {
    expect(formatearFecha(4, 7, 2023)).toBe('4 de julio de 2023')
  })

  test('Formatea correctamente una fecha de agosto', () => {
    expect(formatearFecha(19, 8, 2023)).toBe('19 de agosto de 2023')
  })

  test('Formatea correctamente una fecha de septiembre', () => {
    expect(formatearFecha(21, 9, 2023)).toBe('21 de septiembre de 2023')
  })

  test('Formatea correctamente una fecha de octubre', () => {
    expect(formatearFecha(31, 10, 2023)).toBe('31 de octubre de 2023')
  })

  test('Formatea correctamente una fecha de noviembre', () => {
    expect(formatearFecha(11, 11, 2023)).toBe('11 de noviembre de 2023')
  })

  test('Formatea correctamente una fecha de diciembre', () => {
    expect(formatearFecha(25, 12, 2023)).toBe('25 de diciembre de 2023')
  })
})
