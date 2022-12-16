import bcrypt from 'bcrypt';


const hashearPassword = (password, pwd_db) => {

    const salt = 10;

    if(pwd_db == undefined){
        const password_hasheada = '';

    }


}

const compararPassword = async(password, pwd_db) =>{
    const match = await bcrypt.compare(password, pwd_db);

    console.log(match);
}


export {
    hashearPassword,
    compararPassword,
}