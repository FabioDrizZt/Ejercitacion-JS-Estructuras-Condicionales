const determinarSignoZodiacal = require('../src/SignoZodiacal')

describe('Ejercicio 6: Signo Zodiacal', () => {
  test('Determina correctamente Aries (inicio)', () => {
    expect(determinarSignoZodiacal(21, 3)).toBe('Aries')
  })

  test('Determina correctamente Aries (fin)', () => {
    expect(determinarSignoZodiacal(19, 4)).toBe('Aries')
  })

  test('Determina correctamente Tauro (inicio)', () => {
    expect(determinarSignoZodiacal(20, 4)).toBe('Tauro')
  })

  test('Determina correctamente Tauro (fin)', () => {
    expect(determinarSignoZodiacal(20, 5)).toBe('Tauro')
  })

  test('Determina correctamente Géminis (inicio)', () => {
    expect(determinarSignoZodiacal(21, 5)).toBe('Géminis')
  })

  test('Determina correctamente Géminis (fin)', () => {
    expect(determinarSignoZodiacal(20, 6)).toBe('Géminis')
  })

  test('Determina correctamente Cáncer (inicio)', () => {
    expect(determinarSignoZodiacal(21, 6)).toBe('Cáncer')
  })

  test('Determina correctamente Cáncer (fin)', () => {
    expect(determinarSignoZodiacal(22, 7)).toBe('Cáncer')
  })

  test('Determina correctamente Leo (inicio)', () => {
    expect(determinarSignoZodiacal(23, 7)).toBe('Leo')
  })

  test('Determina correctamente Leo (fin)', () => {
    expect(determinarSignoZodiacal(22, 8)).toBe('Leo')
  })

  test('Determina correctamente Virgo (inicio)', () => {
    expect(determinarSignoZodiacal(23, 8)).toBe('Virgo')
  })

  test('Determina correctamente Virgo (fin)', () => {
    expect(determinarSignoZodiacal(22, 9)).toBe('Virgo')
  })

  test('Determina correctamente Libra (inicio)', () => {
    expect(determinarSignoZodiacal(23, 9)).toBe('Libra')
  })

  test('Determina correctamente Libra (fin)', () => {
    expect(determinarSignoZodiacal(22, 10)).toBe('Libra')
  })

  test('Determina correctamente Escorpio (inicio)', () => {
    expect(determinarSignoZodiacal(23, 10)).toBe('Escorpio')
  })

  test('Determina correctamente Escorpio (fin)', () => {
    expect(determinarSignoZodiacal(21, 11)).toBe('Escorpio')
  })

  test('Determina correctamente Sagitario (inicio)', () => {
    expect(determinarSignoZodiacal(22, 11)).toBe('Sagitario')
  })

  test('Determina correctamente Sagitario (fin)', () => {
    expect(determinarSignoZodiacal(21, 12)).toBe('Sagitario')
  })

  test('Determina correctamente Capricornio (inicio)', () => {
    expect(determinarSignoZodiacal(22, 12)).toBe('Capricornio')
  })

  test('Determina correctamente Capricornio (fin)', () => {
    expect(determinarSignoZodiacal(19, 1)).toBe('Capricornio')
  })

  test('Determina correctamente Acuario (inicio)', () => {
    expect(determinarSignoZodiacal(20, 1)).toBe('Acuario')
  })

  test('Determina correctamente Acuario (fin)', () => {
    expect(determinarSignoZodiacal(18, 2)).toBe('Acuario')
  })

  test('Determina correctamente Piscis (inicio)', () => {
    expect(determinarSignoZodiacal(19, 2)).toBe('Piscis')
  })

  test('Determina correctamente Piscis (fin)', () => {
    expect(determinarSignoZodiacal(20, 3)).toBe('Piscis')
  })
})
