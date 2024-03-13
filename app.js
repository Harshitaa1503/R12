require("dotenv").config({path: "./.env"});

const express = require("express");
const app = express();

require('./models/dbconfig').dbconnection()

// const dotenv = require("dotenv");
// dotenv.config({path: "./.env"});

// const PORT= process.env.PORT;
//mongodb+srv://harshita:<password>@cluster0.uolns2k.mongodb.net/?retryWrites=true&w=majority


app.listen(process.env.PORT,()=>{
    console.log (`the server is running on port ${process.env.PORT}`)
})

// git config --global user.email "you@example.com"
// git config --global user.name "Your Name" run in terminal