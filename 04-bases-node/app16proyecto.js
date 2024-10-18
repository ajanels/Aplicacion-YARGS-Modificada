const { crearArchivo } = require('../helpers/multiplicarproyecto');
const colors = require('colors');
const argv = require('../config/yargsproyecto');

console.clear();
console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.error(err));

    // -b=5 -h=7 -l