import {Schema,model} from "mongoose";

const schemaClientes = Schema({
    nombre:String,
    empresa:String,
    correo:String,
    telefono: String
})

const Cliente = model('clientes', schemaClientes);

export default Cliente;
