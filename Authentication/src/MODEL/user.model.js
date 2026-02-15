
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
   username:{
    type:String,
    unique:true
   },
   email:String,
   passward:String
})

const usermodel = mongoose.model("user" , userSchema);

module.exports= usermodel;