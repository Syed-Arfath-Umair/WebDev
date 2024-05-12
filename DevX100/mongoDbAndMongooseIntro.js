const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "123abd";
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://***:***@cluster0.****.mongodb.net/****");
const User = mongoose.model("Users" ,{
    name: String,
    username: String,
    password: String,
});

app.post('/signup', async(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    let UserExists = await User.findOne({username: username});
    if(UserExists){
        return res.status(403).send("User Already Exists!");
    }
    const newUser = new User({
        name: name,
        username: username,
        password: password
    });
    
    newUser.save();
    res.json({
        "msg": "User Added Successfully!",
    })
})


app.listen(3000);
