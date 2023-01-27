import {Schema,model} from 'mongoose'
import bcrypt from 'bcrypt'
import { Static } from 'vue';

const usuario = new Schema({
    correo:String,
    contraseña:String,
    rol:[{
        ref: 'modeloRol',
        type: Schema.Types.ObjectId
    }]
});

const Usuario = model('Usuarios',usuario)
export default Usuario;

Static.hashearContraseña = () =>{

}