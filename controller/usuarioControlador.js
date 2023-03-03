import Usuario from "../model/modeloUsuario.js";

const listarUsuarios = async (req,res) =>{
    try {
        let usuarios = await Usuario.find().populate('roles');
        return usuarios.length > 1 ? res.status(200).json({data:usuarios}) : res.status(400).json({data:"No existen registros"})
    } catch (error) {
        return res.status(500).json({msg:`${error.message}`})
    }
}

const editarUsuario = async (req,res) =>{
    
   try {
        const usuarioExiste = await Usuario.findById(req.params.id)
        if(!usuarioExiste)return res.status(404).json({msg:"Usuario no existe"})
    
        const usuarioEditado = await Usuario.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })

        res.status(200).json({msg:'Editado correctamente'})
   } catch (error) {
        res.status(500).json({msg:`${error.message}`})
   }
}

const eliminarUsuario = async (req,res)=>{
    try {
        const usuarioExiste = await Usuario.findById(req.params.id)
        if(!usuarioExiste)return res.status(404).json({msg:'Usuario no existe.'})
        
        await Usuario.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"usuario Eliminado"})

    } catch (error) {
        res.status(500).json({msg:`${error.message}`})
    }
}

export {
    listarUsuarios,
    editarUsuario,
    eliminarUsuario
}