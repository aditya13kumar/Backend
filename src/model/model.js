const mongoose = require('mongoose');

const notesschema = new mongoose.Schema({
    name:String,
    age:Number,
    tittle:String,
})

const notemodel = mongoose.model("note" , notesschema)

module.exports = notemodel