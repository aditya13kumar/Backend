const express  = require('express');
const route = require('./routes/auth.routes');
const cookieParser = require("cookie-parser")
const postroutes = require("./routes/post.routes");


const app = express();
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth",route);
app.use("/api/auth",postroutes);



module.exports = app;

 