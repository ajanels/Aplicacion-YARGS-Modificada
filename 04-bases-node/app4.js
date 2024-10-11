/**
 * ejercicio  - para separar la logica de la aplicacion con
 * el archovo primncipal del mismo.
 * 
 * aca de manda a llamar la destructuracuin de multiplicar.js
 * pue ahora ya tien persmisos para impirtar creararchivo
 */

const {creararchivo} = require ('../helpers/multiplicar')

/**
 * se creo la carpeta helpers para crear toda la logia¿ca de la aplicacion dentro 
 * de el archivo multipllicar.js
 */

console.clear();

const base =1
creararchivo( base);