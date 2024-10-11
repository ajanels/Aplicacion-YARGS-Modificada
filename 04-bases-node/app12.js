/**Ejercicio Agregar opcion 1 o-listar
Utilizará el multiplicar4.js que tendrá la opcion
para aceptar de parámetro la bandera -1-listar
listar sirve para imprimir en consola, si no se elige entonces 
solo creará el archivo.
*/

const { crearArchivo } = require('../helpers/multiplicar4')
const argv = require('yargs')
.option('b', {
alias: 'base',
type: 'number',
demandOption: true
})
.option('l', {
alias: 'listar',
type: 'boolean',
demandOption: true,
default: false
})
.check((argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base tiene que se ser un número'
        }
    return true;
})
.argv

console.clear();
console.log(argv);
//Se envian dos argumentos el valor de base que es numérico y listar que es booleano
crearArchivo (argv.b, argv.l)
.then(nombreArchivo => console.log(nombreArchivo, 'creado')) 
.catch(err => console.log(err));

// La aplicación en este punto hace lo siguiente
// crear la tabla del 66 y listarla node app12-base-66-listar
// node app12-b 66-11
// crear la tabla 66 sin imprimir en consola
// node app12-b 66
// node app12 --base-66