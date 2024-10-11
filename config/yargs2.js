/**
 * Se agrega un describe para que la ayuda del uso de la app (help)
 * describa de mejor forma la aplicación.
 */

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean', // Corregido de 'bolean' a 'boolean'
        demandOption: false,
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .argv;

// Dando permisos de exportación
module.exports = argv;
