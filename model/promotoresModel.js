import {Schema, model} from 'mongoose';

const schemaPromotores = Schema({
    nombre: String,
    apellido: String,
    correo: String,
    credencial: String,
    rol: [{
        rol: String,
    }],
})

const Promotor = model('promotores', schemaPromotores);

export default Promotor;