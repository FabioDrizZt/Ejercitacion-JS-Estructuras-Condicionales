const determinarEstado = require('../src/InstitucionEducacion')

describe('Ejercicio 2: Institución de Educación', () => {
  // Pruebas para estudiantes de carrera diurna
  test('Estudiante diurna con nota 5.5 debe estar Aprobado', () => {
    expect(determinarEstado(5.5, 'diurna')).toBe('Aprobado')
  })

  test('Estudiante diurna con nota 4.0 debe estar Aprobado', () => {
    expect(determinarEstado(4.0, 'diurna')).toBe('Aprobado')
  })

  test('Estudiante diurna con nota 3.9 debe estar Reprobado', () => {
    expect(determinarEstado(3.9, 'diurna')).toBe('Reprobado')
  })

  test('Estudiante diurna con nota 2.0 debe estar Reprobado', () => {
    expect(determinarEstado(2.0, 'diurna')).toBe('Reprobado')
  })

  // Pruebas para estudiantes de carrera vespertina
  test('Estudiante vespertina con nota 6.0 debe estar Aprobado', () => {
    expect(determinarEstado(6.0, 'vespertina')).toBe('Aprobado')
  })

  test('Estudiante vespertina con nota 4.0 debe estar Aprobado', () => {
    expect(determinarEstado(4.0, 'vespertina')).toBe('Aprobado')
  })

  test('Estudiante vespertina con nota 3.9 debe estar en Recuperación', () => {
    expect(determinarEstado(3.9, 'vespertina')).toBe('Recuperación')
  })

  test('Estudiante vespertina con nota 3.5 debe estar en Recuperación', () => {
    expect(determinarEstado(3.5, 'vespertina')).toBe('Recuperación')
  })

  test('Estudiante vespertina con nota 3.4 debe estar Reprobado', () => {
    expect(determinarEstado(3.4, 'vespertina')).toBe('Reprobado')
  })

  test('Estudiante vespertina con nota 1.0 debe estar Reprobado', () => {
    expect(determinarEstado(1.0, 'vespertina')).toBe('Reprobado')
  })
})
