//Esto genera los roles al iniciar el sistema 
//admin, secretario, trainer, comercial
import rol from '../model/modeloRol.js';
//creamos roles por defecto 

export const createdRoles = async() =>{
    //consultamos si existe un documento creado

try {
    const registros = await rol.estimatedDocumentCount();
    if(registros > 0) return; 
 
    const values = await Promise.all([
         new rol({nombre : "admin"}).save(),
         new rol({nombre : "trabajador"}).save(),
    ]);
 
    console.log(values);
} catch (error) {
    console.error(error);

}
    

}

