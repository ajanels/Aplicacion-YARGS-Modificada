const fs = require('fs');
const PDFDocument = require('pdfkit');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let consola = '';
        let salida = '';

        // Generar la tabla de multiplicar
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        // Mostrar en consola si se solicita
        if (listar) {
            console.log('========================'.green);
            console.log(`     Tabla del: ${colors.blue(base)}`.green);
            console.log('========================='.green);
            console.log(consola);
        }

        

        // Crear el archivo PDF
        const doc = new PDFDocument();
        const filePath = `../salida/tabla-${base}-hasta-${hasta}.pdf`;
        doc.pipe(fs.createWriteStream(filePath));

       
        doc.fontSize(20).text(`Tabla de multiplicar del ${base} hasta el ${hasta}`, {
            align: 'center'
        });
        doc.moveDown();
        doc.fontSize(16).text(salida);

       
        doc.end();

        return filePath;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};
