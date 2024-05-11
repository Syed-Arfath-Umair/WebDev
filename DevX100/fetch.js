const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    async function re(){
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        res.send(data);
    }
    re();
})
app.listen(port);
