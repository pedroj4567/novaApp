import {Schema,model} from 'mongoose'
import bcrypt from 'bcrypt'

const usuario = new Schema({
    usuario:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    correo:{
        require:true,
        type:String
    },
    roles:[{
            ref :'modeloRol',
            type: Schema.Types.ObjectId
        }]
});

usuario.statics.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password , salt);
}
usuario.statics.comparePassword = async (password, passwordRecived) =>{
    //TRUE coincide, FALSE no coincide
   return await bcrypt.compare(password,passwordRecived)
}


const Usuario = model('Usuarios',usuario)
export default Usuario;

