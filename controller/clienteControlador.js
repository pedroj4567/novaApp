import Cliente from '../model/modeloCliente.js';

const listarClientes = async (req,res)=>{
    const registros = await Cliente.find();
 
    if(registros.length < 1) return res.status(400).json({msg:'No posee registros aun.'})
    
    try {
        const clientes = await Cliente.find();
        res.status(200).json({data:clientes});
    } catch (error) {
        res.status(500).json({msg:error});
    } 
}

const registrarCliente = async (req,res) =>{
    const {email} = req.body;
    const clienteExiste = await Cliente.findOne({email})
/*     if(clienteExiste){
        return res.status(400).json({msg:'Cliente ya registrado'})
    } */
    try {
        const clienteNuevo = new Cliente(req.body);
        await clienteNuevo.save();
        res.status(201).json({msg:"Cliente Registrado Correctamente!"});
       
    } catch (error) {
        res.status(500).json({msg:`${error}`})
    }
}


const editarCliente = async (req,res)=>{
    const clienteExiste = await Cliente.findOne()
   
    /* if(clienteExiste){
        return res.status(400).json({msg:'Cliente ya registrado'})
    } */
    try {
        const clienteEditado = await Cliente.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        });
        res.status(200).json({msg:'cliente modificado', clienteEditado})
    } catch (error) {
        res.status(500).json({msg:error})
    }

}   

const eliminarCliente = async (req,res)=>{

        try {  
            const {id} = req.params;
            const clienteEliminado = await Cliente.findByIdAndDelete(id);
            res.status(200).json({msg:'Cliente eliminado', clienteEliminado});
        } catch (error) {
            res.status(400).json({msg:error});
        }
}

export {
    eliminarCliente,
    editarCliente,
    registrarCliente,
    listarClientes
}