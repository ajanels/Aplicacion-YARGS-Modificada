/**
 * parte de la logica solo se corto poe el momento 
 * pero no tiene ninngun cambio logico de yargs.js
 */

const argv= require ('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption: true
    })
    .option('l',{
        alias:'listar',
        type:'bolean',
        demandOption: true
    })  
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'la base tiene que ser un numero'
        }
        return true;
    })
    .argv
    //dando permisos de esprtacion

    module.exports=argv;