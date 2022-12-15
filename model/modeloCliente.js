import mongoose from "mongoose";

const schemaClientes = mongoose.Schema({
    nombre:String,
    empresa:String,
    correo:String,
    telefono: String,
},{
    versionkey : false
})

const Cliente = mongoose.model('clientes',schemaClientes);

export default Cliente;