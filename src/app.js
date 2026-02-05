const express = require('express');
const notemodel = require('./model/model');

const app = express();

app.use(express.json());




/** notes = name
 * POST / NOTES => CREATE NOTE
 * GET / NOTES => GET ALL NOTES
 * PATCH / NOTES:INDEX => UPDATE NOTES
 * DELETE / NOTES:INDEX => DELETE NOTES
 *  , about 
 * */

app.post('/notes',async (req,res)=>{
    const data = req.body
    await notemodel.create({
        name:data.name,
        age:data.age,
        tittle:data.tittle,
    })
    res.status(200).json({message:"note created!!"})
})

app.get('/notes',async (req,res)=>{
   const notes = await notemodel.find() ; // [] in array

   res.status(200).json({
    message:"notes fetched!!",
    notes:notes
    });
})

// app.get("/notes",async (req,res)=>{
//     const notes =await notemodel.findOne({
//         age:19
//     })

//     res.status(200).json({
//         message:"notes finded!!",
//         notes: notes
//     })
// })


app.delete('/notes/:id',async (req,res)=>{
    const id = req.params.id

    await notemodel.findOneAndDelete({
        _id: id
    })
    res.status(200).json({
        message:"note deleted successfully"
    })
})


app.patch('/notes/:id', async (req,res)=>{
    const id = req.params.id
    const name = req.body.name

    await notemodel.findByIdAndUpdate({_id:id},{name:name})

    res.status(200).json({
        message:"note update successfully"
    })
})


module.exports = app


// mongodb+srv://backend:<db_password>@backend01.jincem5.mongodb.net/
// mongodb+srv://backendyt:pissusinha@backend01.jincem5.mongodb.net/