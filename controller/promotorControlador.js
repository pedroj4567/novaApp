import Promotor from '../model/promotoresModel.js';

const listarPromotores = async (req,res)=>{
   try {
    const promotores = await Promotor.find();
    res.status(200).json({data:promotores});
   } catch (error) {
    res.status(500).json({msg:error});
   }
}

const registrarPromotor = async (req,res) =>{

    //validar si ya existe 
    const {email} = req.body;
    const existe = await Promotor.findOne(email)
    if(existe){
        return res.status(400).json({msg:"usuario ya registrado"})
    }


    try {
        const nuevoPromotor = new Promotor(req.body);
        const promotorGuardado = nuevoPromotor.save()
        res.status(202).json({msg:'registrado satisfactoriamente', promotorGuardado})


    } catch (error) {
        res.status(500).json({msg:`${error}`})
    }
}


const editarPromotor = async (req,res)=>{
   
    try {
        const promotorEditado = await Promotor.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        });
        res.status(200).json({msg:'promotor modificado', Editado})
    } catch (error) {
        res.status(500).json({msg:error})
    }

}   

const eliminarPromotor = async (req,res)=>{

        try {  
            const {id} = req.params;
            const promotorEliminado = await Cliente.findByIdAndDelete(id);
            res.status(200).json({msg:'Cliente eliminado', promotorEliminado});
        } catch (error) {
            res.status(400).json({msg:error});
        }
}

export {
    eliminarPromotor,
    editarPromotor,
    registrarPromotor,
    listarPromotores
}