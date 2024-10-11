//Ejercicio - Conversión a función promesa en multiplicar2.js
//MEJORANDO EL CODIGO OPCION 1-
//Aca de manda a llamar la destructuracion de multiplicar2.js
//que ahora ya tiene permisos para importar crearArchivo aca de transformo en Promresas las funicones flecha.
const { crearArchivo } = require('../helpers/multiplicar2')

//Se creo la carpeta helpers para crear toda la logina
//de la aplicacion en un archivo dentro de esta carpeta llamado multiplicar.js

console.clear();
const base = 31

//Cuando se utiliza el then sirve para ejecutar el resolve de la Promesa (éxito)
//Cuando se utilizar el catch sirve para ejecutar el reject de la Promesa (error)
crearArchivo(base)
.then (nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err))