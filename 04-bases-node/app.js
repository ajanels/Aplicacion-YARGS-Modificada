//*Ejercicio - inicio de nuestro proyecto, crear una aplicación que imprima en
// *consola la tabla del cinco, trate de realizarla por sus medios y compare
// *el resultado de su lógica contra lo resuelta acá.
// * Hacer un programa en Consola que imprima la
// * Tabla del cinco de forma automática
// 5 x1=5
// *5 x 2 = 10
// *5 x 3 = 15

// 5 x 10=50.

// * Para ejecutar la aplicació es necesario llevar la consola a la carpeta 
//donde se encuentra este proycto 04-Fundamentos y ejecutar el sigueinte * comando

// node app

//La variable base sirve para indicar sobre que base vamos a realizar
//la tabla de multiplicar.



let base = 5
console.clear(); //Borra la pantalla
const tabla = (base) => {
let resultado = ''
console.log(`---Tabla del ${base} -----`);
for (let i=1; i<= 10; i++){
 resultado = resultado +`${base}x${i}=${base*i}\n`;
}
return resultado
}
console.log(tabla (base));

// MI PRIMER VERSION PROPUESTA 
// console.clear();
// console.log('===================');
// console.log('    TABLA DEL 5    ');
// console.log('===================');

// for(let i =0;i<=10; i++){
//   console.log(`${base}X ${i}= ${base*i}`);
// }

        