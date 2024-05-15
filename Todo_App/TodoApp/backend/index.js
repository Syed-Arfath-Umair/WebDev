const {schemaForTodo, schemaForId} = require('../backend/types');
const {newSchemaTodo} = require('../backend/db');
const express = require('express');
const zod = require('zod');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.post('/todos', async (req, res)=>{
    const createPayLoad = req.body;
    const parsedPayLoad = schemaForTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.status(403).json({
            msg: "Bad Inputs Sent!",
        });
        return;
    }
    await newSchemaTodo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    });
    res.json({
        msg: "Todo added successfully"
    });
});

app.get('/todos', async(req,res)=>{
    const todos = await newSchemaTodo.find({});
    res.status(200).json({
        todos
    })
});

app.put('/completed', async (req, res)=>{
    const createPayLoad = req.body;
    const parsedPayLoad = schemaForId.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.status(403).json({
            msg: "Bad Inputs!",
        });
    }
    await newSchemaTodo.updateOne({
        _id: req.body.id,
    }, {
        completed: true,
    });
    res.status(200).json({
        msg: "todo marked as completed!",
    })
});

app.listen(port, ()=> console.log("Listening at "+port));