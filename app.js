require("dotenv").config({path: "./.env"});

const express = require("express");
const app = express();

// const dotenv = require("dotenv");
// dotenv.config({path: "./.env"});

const PORT= process.env.PORT;



app.listen(process.env.PORT,()=>{
    console.log (`the server is running on port ${process.env.PORT}`)
})

// git config --global user.email "you@example.com"
// git config --global user.name "Your Name" run in terminal