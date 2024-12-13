import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const conectarDB = async () =>{
    try{
            mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology : true,
        });

        console.log('Base de datos conectada correctamente!')
    }catch(e){
        console.log(`error: ${e}`);
        process.exit(1);
    }


}
export default conectarDB;