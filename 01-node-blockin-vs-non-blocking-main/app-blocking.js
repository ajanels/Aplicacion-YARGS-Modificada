const { getUsuarioSync }= require('./usuarios/usuarios');

console.log('inicio de programa');
console.time('inicio');


const usuario1 =getUsuarioSync(1);
console.log('usuario 1:', usuario1);

const usuario2 =getUsuarioSync(2);
console.log('usuario 2:', usuario2);


console.log('fin del programa');
console.timeEnd('inicio');
