import express from 'express';
import dotenv from 'dotenv';
//rutas 
import routerCliente from './routes/routerCliente.js'; 

//extras
import conectarDB from './config/bd.js';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 4000;

//variables de entorno 
dotenv.config()

//debug 
app.use(morgan('dev'))

//Parse a json
app.use(express.json());


//base de datos
conectarDB();

//rutas
app.use('/api/clientes',routerCliente)




app.listen(PORT, ()=>{
    console.log(`server runnin in the port: ${PORT}`)
})

