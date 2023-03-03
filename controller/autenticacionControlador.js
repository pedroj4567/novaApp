import Usuario from "../model/modeloUsuario.js";
import jwt from 'jsonwebtoken'
import rol from '../model/modeloRol.js';
//iniciar sesion 

const iniciarSesion = async (req,res) =>{
    const usuarioEncontrado = await Usuario.findOne({correo:req.body.correo}).populate('roles');
    if(!usuarioEncontrado) return res.status(400).json({msg:'Usuario no encontrado'})


    //chequeamos la password 
    const matchPassword = await Usuario.comparePassword(req.body.password, usuarioEncontrado.password);
    if(!matchPassword) return res.status(401).json({msg:'Contraseña Invalida',})
    console.log(usuarioEncontrado);
    const token = jwt.sign({id:usuarioEncontrado._id},process.env.SECRET_WORD,{
        expiresIn:86400
    })

    res.json({msg:"Acceso correcto", token})
}

const registrarUsuario = async (req,res)=>{
    const {usuario,correo,roles,password} = req.body;
    const usuarioExisteCorreo = await Usuario.findOne({correo})
    const usuarioExisteUsuario = await Usuario.findOne({usuario})

    if(usuarioExisteCorreo){
        return res.status(400).json({msg:"Correo ya registrado"})
    }
    if(usuarioExisteUsuario){
        return res.status(400).json({msg:"Nombre de Usuario ya registrado"})
    }

  try { 

        const nuevoUsuario = new Usuario({
            usuario,
            correo,
            password : await Usuario.encryptPassword(password),
            roles
        })

        //verificamos si posee un rol 

        if(roles){
           const rolEncontrado = await rol.find({name:{$in:roles}});
           nuevoUsuario.roles = rolEncontrado.map(rol => rol._id);
        }else{
            const role = await rol.find({nombre: "trabajador"});
            nuevoUsuario.roles = [role[0]._id];
            
        }

        const usuarioGuardado = await nuevoUsuario.save();
        // console.log(usuarioGuardado)
        //generamos el token de seguridad
        const token =  jwt.sign({id: usuarioGuardado._id},`${process.env.SECRET_WORD}`,{
                expiresIn:86400 //24 horas de duracion
            })


        res.status(201).json({msg:"registrado con exito", token})


  } catch (error) {
        res.status(500).json({msg:`${error.message}`})
  }
}



export {
    iniciarSesion,
    registrarUsuario
}