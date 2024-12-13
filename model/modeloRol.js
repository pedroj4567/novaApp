import {Schema,model} from "mongoose";

const roles = new Schema(
{
    nombre : String
},{
    versionKey:false
});

const rol = model('Roles', roles);
export default rol;