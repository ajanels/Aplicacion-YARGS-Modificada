/**Ejercico operando la aplicacion con yargs inical
Aca se tinen configurado que se puede caputura-bo-base y que se pueda crear la tabla deseada en un archivo mediante peticiones ne consola
por ejemplo node app11--base-10 , esto crea el archivo de la tabla del le *Dando inicio al uso del paquete yar's
*/


//Utiliza la versión de multiplicar3.js que se encuentra en helpers
const { crearArchivo } = require('../helpers/multiplicar3')
const argv= require('yargs')
.option('b', {
alias: 'base',
type: 'number',
demandOption: true
})
.check((argv, options) => {
if(isNaN(argv.b)){
        throw 'La base tiene que se ser un número'
}
return true; //Esta es la parte más importante para lanza la validación
})
.argv

console.clear();
console.log(argv);

// se agrego el trabaja especifico con la base b y se disparara el erro si no es un numero
crearArchivo(argv.b)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))

/**
 *uso de yargs, ver el resultado de escribir en consola 
 node app11 -b=17
 node app11 --base=17 
 */