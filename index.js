import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
//rutas 
import routerCliente from './routes/routerCliente.js'; 
import routerAutenticacion from './routes/routerAutenticacion.js';
import routerUsuarios from './routes/routerUsuarios.js';
//extras
import {createdRoles} from './libs/setup.js'
import conectarDB from './config/bd.js';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 4000;



//variables de entorno 
dotenv.config();

//debug 
app.use(morgan('dev'));

//Parse a json
app.use(express.json());

//cors
const domainCorsAllowed = ["http://localhost:5173"];
const corsOptions = {
    origin : (origin,callback)=>{
        if(domainCorsAllowed.indexOf(origin) != -1){
            callback(null,true);
        }else{
            callback(new Error("No permitido por CORS"));
        }
    }
}
app.use(cors(corsOptions));

//base de datos
conectarDB();
createdRoles();//Genera dos roles por defecto admin y trabajador

//rutas
app.use('/api/clientes',routerCliente);
app.use('/api/auth',routerAutenticacion);
app.use('/api/usuarios', routerUsuarios);



app.listen(PORT, ()=>{
    console.log(`server runnin in the port: ${PORT}`);
});

