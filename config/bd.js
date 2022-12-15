import mongoose, { mongo } from 'mongoose';

mongoose.set('strictQuery', true);

const conectarDB = async () =>{

    try{
        const db = mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology : true,
        });

        console.log(`base de datos conectada`)
    }catch(e){
        console.log(`error: ${e}`);
        process.exit(1);
    }


}

export default conectarDB;