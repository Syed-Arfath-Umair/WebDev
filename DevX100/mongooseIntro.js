const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:***@cluster0.***.mongodb.net/***");
const Users = mongoose.model("User" ,{
    name: String,
    username: String,
    password: String,
});

const user = new Users({
        name: "sau",
        username: "sau@1.com",
        password: "sau"
});
user.save().then(()=>{
        console.log("Done!");        
})
