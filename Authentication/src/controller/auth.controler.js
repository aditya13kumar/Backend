const usermodel = require("../MODEL/user.model");
const jwt = require("jsonwebtoken");

async function register(req, res){
    const {username , email , passward } = req.body;

    const isusernamealreadyexist= await usermodel.findOne({
        username
    })

    if(isusernamealreadyexist){
        return res.status(409).json({
            message:"user already exists"
        })
    }

    const user = await usermodel.create({
        username,email,passward
    });

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie("token",token);

    res.status(201).json({
        message:"user registered successfully",
        user,
    })



}

module.exports = {register};