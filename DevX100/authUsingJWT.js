const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "123abd";
const app = express();
app.use(express.json());
const ALL_USERS = [
    {
        username: "Priya",
        age: 23,
        password: "Priya123"
    },{
        username: "Sandeep",
        age: 33,
        password: "Sandy123"
    },{
        username: "Bezos",
        age: 73,
        password: "Bezos123"
    }
]
function UserExists(username, password){
    for(let i =0; i<ALL_USERS.length; i++){
        if(username === ALL_USERS[i].username && password === ALL_USERS[i].password) return true;
    }
    return false;
}

app.post("/signup", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if(!UserExists(username, password)){
        res.status(411).send("Invalid Username Or Password!");
    }

    const token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
})

app.get("/users", (req, res)=>{
    const token = req.headers.authorization;
    const decodedUsername = jwt.verify(token, jwtPassword);
    const username = decodedUsername.username;        
    res.json({
        users: ALL_USERS.filter((value)=>{
            if(value.username === username) return false;
            return true;
        }),
    });
})
app.listen(3000);
