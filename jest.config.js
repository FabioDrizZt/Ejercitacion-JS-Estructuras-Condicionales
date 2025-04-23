/**
 * Configuración para Jest
 */

module.exports = {
  // Directorio de tests
  testMatch: ['**/tests/**/*.test.js'],

  // Mostrar mensajes de salida detallados
  verbose: true,

  // Permitir mensajes de consola durante los tests
  silent: false,

  // Establecer un timeout para los tests
  testTimeout: 5000,

  // No usar caché
  cache: false,

  // Mostrar los resultados con mejor formato
  testEnvironment: 'node'
}
