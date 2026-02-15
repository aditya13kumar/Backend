const mongoose= require('mongoose');

async function connectdb(){
    try{

        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected");
    }catch(err){
         console.error("database connection error:" , err);
    }
}

module.exports = connectdb;