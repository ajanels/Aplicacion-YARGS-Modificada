// este archovo tiene la logica para que funciones le app4.js
const fs= require('fs');

/**
 * se utiliza el modullo.exports para dar periso a este archivo 
 * de exportar creararchivo hasta el final de este archivo.
 */

// funcion que tiene por objeto cerar la tabla de la base sugeriad u 
//por default imprimira y generara la tabla dek cinco, si no se asigna el primer parametro base

const creararchivo=(base=5)=>{
    console.log('=======================');
    console.log('    Tabla del :', base  );
    console.log('=======================')

    let salida= '';

    for(let i=1; i <= 10; i++){
        salida +=  `${base} x ${i} = ${base* i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        console.log(`tabla-${base}.txt creado`);
}
        
        //module.exports es exclusivo de NODE no funciona del la del cliente es decir el navegador
        //en el navegador se utiliza el export
        module.exports = {
            creararchivo 
        }

