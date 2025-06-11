/**
 * Ejercicio 6: Signo Zodiacal
 *
 * Enunciado:
 * Escribe una función que determine el signo zodiacal de una persona
 * según su fecha de nacimiento (día y mes).
 *
 * - Aries: 21 de marzo - 19 de abril
 * - Tauro: 20 de abril - 20 de mayo
 * - Géminis: 21 de mayo - 20 de junio
 * - Cáncer: 21 de junio - 22 de julio
 * - Leo: 23 de julio - 22 de agosto
 * - Virgo: 23 de agosto - 22 de septiembre
 * - Libra: 23 de septiembre - 22 de octubre
 * - Escorpio: 23 de octubre - 21 de noviembre
 * - Sagitario: 22 de noviembre - 21 de diciembre
 * - Capricornio: 22 de diciembre - 19 de enero
 * - Acuario: 20 de enero - 18 de febrero
 * - Piscis: 19 de febrero - 20 de marzo
 *
 * La función debe retornar un string con el signo zodiacal.
 */

const dia = parseInt(process.env.DIA, 10)
const mes = parseInt(process.env.MES, 10)

let signo = ''

if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
  signo = 'Aries'
} else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
  signo = 'Tauro'
} else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
  signo = 'Géminis'
} else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
  signo = 'Cáncer'
} else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
  signo = 'Leo'
} else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
  signo = 'Virgo'
} else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
  signo = 'Libra'
} else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
  signo = 'Escorpio'
} else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
  signo = 'Sagitario'
} else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
  signo = 'Capricornio'
} else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
  signo = 'Acuario'
} else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
  signo = 'Piscis'
}

module.exports = signo
