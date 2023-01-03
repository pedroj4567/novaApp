import Cliente from '../model/modeloCliente.js';

const listarClientes = async (req,res)=>{
   try {
    const clientes = await Cliente.find();
    res.status(200).json({data:clientes});
   } catch (error) {
    res.status(500).json({msg:error});
   }
}

const registrarCliente = async (req,res) =>{
    const {email} = req.body;
    const existe = await Cliente.findOne(email)
    if(existe){
        return res.status(400).json({msg:"Cliente ya registrado"})
    }

    try {
        const nuevoCliente = new Cliente(req.body);
        const clienteGuardado = nuevoCliente.save()
        res.status(202).json({msg:'registrado satisfactoriamente', clienteGuardado})


    } catch (error) {
        res.status(500).json({msg:`${error}`})
    }
}


const editarCliente = async (req,res)=>{
   
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
            console.log(clienteEliminado)
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