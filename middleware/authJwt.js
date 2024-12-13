//verificar token para acceder a los endpoints
import jwt from "jsonwebtoken";
import Usuario from "../model/modeloUsuario.js";
export const verificarToken = async (req,res,next)=>{
    try {
        const token = req.headers['x-access-token'];
    
        //verificamos que si no tiene el token no deja continuar
        if(!token) return res.status(403).json({msg:"Token no encontrado"});

        //verificamos el token 
        const decodificacion = jwt.verify(token, process.env.SECRET_WORD);
        req.userId = decodificacion.id; // le asignamos un nuevo elemento al req
        const userFound = await Usuario.findById(req.userId);
        
        if(!userFound) return res.status(404).json({msg:'El usuario no existe en los registros'});

        next();
    } catch (error) {
        return res.status(401).json({msg:"No Autorizado"});
    }
}