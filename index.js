import express from 'express';
import dotenv from 'dotenv';
//ritas 
import routerCliente from './routes/routerCliente.js'; 
import conectarDB from './config/bd.js';
const app = express();
const PORT = process.env.PORT || 4000;

//variables de entorno 
dotenv.config()


app.use(express.json());


//base de datos
conectarDB();

//rutas
app.use('/api/clientes',routerCliente)

app.listen(PORT, ()=>{
    console.log(`server runnin in the port: ${PORT}`)
})

