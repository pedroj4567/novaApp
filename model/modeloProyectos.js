import {Schema,model} from 'mongoose'

const proyecto = new Schema({
    nombre:String,
    fechaInicio : String,
    fechaCulminacion:String,
    responsable:String,
    documentos :[
        {
            imagen:String,
            documento:String
        }
    ]
},{
    versionKey:false,
    timestamps:true
})

const Proyecto = model('Proyectos',proyecto);
export default Proyecto;