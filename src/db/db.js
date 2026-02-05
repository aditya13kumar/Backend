const mongoose = require("mongoose");


async function connectDB (){
    await mongoose.connect("mongodb+srv://backendyt:pissusinha@backend01.jincem5.mongodb.net/aditya");

    console.log("connected with db");
}

module.exports= connectDB;