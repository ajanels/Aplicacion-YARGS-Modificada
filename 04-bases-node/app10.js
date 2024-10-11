const {crearArchivo }= require('../helpers/multiplicar3')
const argv = require('yargs')
.option('b', {
alias: 'base',
type: 'number',
demandOption: true
})
.check((argv, options) => {
if(isNaN(argv.b)){
//NaN Not a Number
throw 'La base tiene que se ser un número'
}
return true;
})
.argv

console.clear();

console.log(process.argv); //interno
console.log(argv); //del paquete yargs
console.log('base: yargs',argv.b);

/** 
Uso de yargs ver el resultado de escribir ne consola
node app10 --base-5-limite=10
node app10--base-abc
node app10 -b 5
node app10
Documentar que pasa en cada caso. de lo plantedo en las líneas anteriores
*/