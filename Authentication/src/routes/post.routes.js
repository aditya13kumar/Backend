const express = require('express');
const jwt = require("jsonwebtoken");
const usermodel = require("../MODEL/user.model");

const router = express.Router();

router.post("/create",async(req,res)=>{

   const token = req.cookies.token;

   if(!token){
    return res.status(401).json({
        message:"unauthorize"
    })
   }

   try{
      const decoded = jwt.verify(token,process.env.JWT_SECRET);

      const user = await usermodel.findOne({
        _id:decoded.id
      })
      console.log(user)
   }catch(err){
       res.status(401).json({
        message:"wrong token"
       })
   }

   res.send("post created successfully");
})

module.exports = router;