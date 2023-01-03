import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const conectarDB = async () =>{
    try{
            mongoose.connect("mongodb+srv://pedroj4567:pj-28176538@cluster0.axz9qg0.mongodb.net/novaPP", {
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