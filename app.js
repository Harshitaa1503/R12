require("dotenv").config({path: "./.env"});

const express = require("express");
const app = express();

require('./models/dbconfig').dbconnection()

//routes
const userRouter= require("./routes/userRoute")

//logger
const logger = require("morgan")
app.use(logger("tiny"))
//body parser

app.use(express.json)
app.use(express.urlencoded({extended:true}))


//http://localhost:8080/api/user/
//http://localhost:8080/api/user/create

app.use("/api/user", userRouter);

//server
app.listen(process.env.PORT,()=>{
    console.log (`the server is running on port ${process.env.PORT}`)
})


// const dotenv = require("dotenv");
// dotenv.config({path: "./.env"});

// const PORT= process.env.PORT;
//mongodb+srv://harshita:<password>@cluster0.uolns2k.mongodb.net/?retryWrites=true&w=majority

