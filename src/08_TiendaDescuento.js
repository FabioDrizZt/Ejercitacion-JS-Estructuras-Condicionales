/**
 * Ejercicio 8: Tienda de Descuento
 *
 * Enunciado:
 * Una tienda de descuento realiza una promoción en la cual el cliente saca
 * una bolita de color al momento de pagar. Según el color de la bolita,
 * el cliente obtendrá un descuento sobre el valor de su compra:
 *
 * - Bolita blanca: 0% de descuento
 * - Bolita verde: 10% de descuento
 * - Bolita amarilla: 25% de descuento
 * - Bolita azul: 50% de descuento
 * - Bolita roja: 100% de descuento
 *
 * Escribe una función que calcule el monto final a pagar por el cliente,
 * según el valor de la compra y el color de la bolita.
 *
 * La función debe retornar el monto final a pagar (número).
 */

const valorCompra = parseFloat(process.env.VALOR_COMPRA)
const colorBolita = process.env.COLOR_BOLITA

let descuento = 0
switch (colorBolita) {
  case 'blanca':
    descuento = 0
    break
  case 'verde':
    descuento = 0.10
    break
  case 'amarilla':
    descuento = 0.25
    break
  case 'azul':
    descuento = 0.50
    break
  case 'roja':
    descuento = 1.00
    break
}

const montoFinal = valorCompra * (1 - descuento)

module.exports = montoFinal
