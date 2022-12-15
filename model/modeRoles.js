import mongoose from "mongoose";

const rolesSchema = mongoose.Schema({
    roles:[{
        Promotor:String,
        Admin:String
    }]
},{
    versionKey:false
})

const rol = mongoose.model('roles',rolesSchema);
export default rol;