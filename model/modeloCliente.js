import {Schema,model} from "mongoose";

const schemaClientes = Schema({
    nombre:String,
    apellido:String,
    empresa:String,
    correo:{
        unique:true,
        type:String,
    },
    telefono: String,
    tipo: String,
    direccion: String,
    rif:String,
    atendido:Boolean,
    
},{
    timeStamps:true
})

const Cliente = model('Clientes', schemaClientes);

export default Cliente;
