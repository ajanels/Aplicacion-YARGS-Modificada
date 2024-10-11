//Christian tomas ajanel ajanel 
// carnet 2290-20-21920


const getUsuarioSync = (id) =>{
    const startPoint= new Date().getTime();
        while ( new Date().getTime()-startPoint <= 3000) {
            //esperando---
            //haciendo fetch de base de datos 
            // robando datros de facebook
        }

        return {
            id,
           nombre: `Usuario ${ id }`
        };
}


const getUsuario =(id, callback)=>{
    const Usuario={
        id,
        nombre: `Usuario ${ id }`
    };
    
    setTimeout(() => {
        callback(Usuario);
    },3000);
}

module.exports={
    getUsuario,
    getUsuarioSync
}