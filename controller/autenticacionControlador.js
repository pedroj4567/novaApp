import Usuario from "../model/modeloUsuario.js";

//iniciar sesion 
const iniciarSesion = async (req,res) =>{
    
    
}

const registrarUsuario = async (req,res)=>{
    const {usuario,correo,roles,password} = req.body;

    const nuevoUsuario = new Usuario({
        usuario,
        correo,
        password : await Usuario.encryptPassword(password),
        roles
    })

   console.log(nuevoUsuario)
}



export {
    iniciarSesion,
    registrarUsuario
}