// server create karna

const express = require('express');

const app = express();

app.use(express.json())



const notes = []

app.post('/notes', (req,res) => {
   // console.log(req.body);
   notes.push(req.body);

   res.status(201).json({
    message: "notes created successfully"
   });
})

app.get('/notes' , (req,res) => {
    res.status(200).json({
        message:"notes fetched successfully",
        notes : notes
    })
})


/* delete / notes / index */

app.delete('/notes/:index' , (req,res) => {

    const index = req.params.index
    console.log(index);

    delete notes[index]

    res.status(200).json({
        message:"note deleted successfully"
    })

})

app.patch("/notes/:index" , (req,res) =>{
    const index = req.params.index
    const tittle = req.body.tittle

    notes[index].tittle = tittle

    res.status(200).json({
        message:"note updated successfully"
    })
})

module.exports = app