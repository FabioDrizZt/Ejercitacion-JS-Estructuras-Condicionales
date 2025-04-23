# Ejercitación JavaScript - Estructuras Condicionales

Este repositorio contiene los ejercicios correspondientes al Trabajo Práctico N° 02 sobre estructuras condicionales en JavaScript. Cada ejercicio está diseñado para practicar diferentes aspectos de la programación con condicionales.

## Contenido

Este repositorio incluye:

- 9 ejercicios de JavaScript enfocados en estructuras condicionales
- Tests automatizados para cada ejercicio
- Instrucciones detalladas para cada problema

## Requisitos

Para trabajar con este repositorio necesitas:

- Node.js (versión 14 o superior)
- npm (normalmente viene con Node.js)
- Un editor de código (recomendado: Visual Studio Code)
- Conocimientos básicos de terminal/línea de comandos

## Instrucciones

### 1. Clonar el repositorio

Primero debes hacer un fork del repositorio a tu cuenta de GitHub:

1. Haz clic en el botón "Fork" en la esquina superior derecha de la página del repositorio
2. Selecciona tu cuenta como destino del fork

Luego, clona tu fork a tu máquina local:

```bash
git clone https://github.com/TU_USUARIO/Ejercitacion-JS-Estructuras-Condicionales.git
cd Ejercitacion-JS-Estructuras-Condicionales
```

### 2. Instalar dependencias

Instala las dependencias necesarias para ejecutar los tests:

```bash
npm install
```

### 3. Resolver los ejercicios

En la carpeta `src` encontrarás los archivos JavaScript para cada ejercicio. Cada archivo contiene:

- Un enunciado del problema como comentario al inicio
- Una función que debes completar

Abre cada archivo y completa la función siguiendo las instrucciones del enunciado.

### 4. Ejecutar los tests

Para verificar tus soluciones, puedes ejecutar los tests de dos formas:

Para ejecutar todos los tests una sola vez:

```bash
npm test
```

Para ejecutar los tests en modo "watch" (se ejecutan automáticamente cuando guardas cambios):

```bash
npm run test:watch
```

Para ejecutar los tests de un ejercicio específico:

```bash
npm test -- tests/NumeroPositivoNegativo.test.js
```

### 5. Interpretar los resultados de los tests

Después de ejecutar los tests, verás un resultado similar a este:

```
PASS  tests/NumeroPositivoNegativo.test.js
FAIL  tests/InstitucionEducacion.test.js
```

- ✅ PASS: Significa que tu solución es correcta
- ❌ FAIL: Significa que tu solución tiene errores. Lee los mensajes de error para entender qué está fallando.

### 6. Enviar tus soluciones

Cuando hayas completado todos los ejercicios y todos los tests pasen correctamente:

```bash
git add .
git commit -m "Resueltos los ejercicios del Trabajo Práctico N° 02"
git push origin main
```

## Descripción de los Ejercicios

1. **NumeroPositivoNegativo.js**: Determinar si un número es positivo, negativo o cero y si es par o impar.
2. **InstitucionEducacion.js**: Determinar el estado de un estudiante según su nota de presentación y su carrera (diurna o vespertina).
3. **OrdenarValores.js**: Ordenar tres valores diferentes en forma creciente.
4. **TipoTriangulo.js**: Determinar si un triángulo es isósceles, escaleno o equilátero según sus lados.
5. **FechaNombreMes.js**: Mostrar una fecha con el nombre del mes correspondiente.
6. **SignoZodiacal.js**: Determinar el signo zodiacal de una persona según su fecha de nacimiento.
7. **CostoInternacion.js**: Calcular el costo total de internación de un paciente según el tipo de enfermedad.
8. **TiendaDescuento.js**: Calcular el monto final a pagar en una tienda de descuento según el color de una bolita.
9. **CalificacionEstudiante.js**: Asignar una calificación a un estudiante según su nota de examen final.

## Consejos para resolver los ejercicios

- Lee cuidadosamente el enunciado de cada ejercicio
- Planifica tu solución antes de comenzar a escribir código
- Utiliza condicionales (if-else, switch) según sea apropiado
- No modifiques la estructura de los archivos, solo completa las funciones
- Ejecuta los tests frecuentemente para verificar tu progreso
- Consulta la documentación de JavaScript si tienes dudas

¡Buena suerte con los ejercicios!