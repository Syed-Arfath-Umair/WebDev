const express = require('express');
const router = express.router();
const jwt = require('jsonwebtoken');
const zod = require('zod');
const { JWT_SECRET } = require('../config');
const {User} = require('../db');
const { authMiddleware } = require('../authMiddleware');

const userSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})
const signinSchema = zod.object({
    username: zod.string(),
    password: zod.string()
})
router.post('/signup', async(req, res)=>{
    const body = req.body;
    const parsedBody = userSchema.safeParse(body);
    if(!parsedBody.success){
        return res.status(500).send({
            msg: "Invalid Inputs",
        })
    }
    const user1 = await User.findOne({
        username: body.username,
    })
    if(user1){
        return res.status(500).send({
            msg: "Invalid Inputs",
        })
    }
    const dbUser = await User.create(body);
    const token = jwt.sign({
        userId: dbUser._id, 
    }, JWT_SECRET);
    res.json({
        msg: "User added successfully",
        token: token
    })
})

router.post('/signin', authMiddleware, async(req,res)=>{
    const body = req.body;
    const user1 = signinSchema.safeParse(body);
    if(user1.success){
        return res.status(500).send({
            msg: "Invalid Inputs",
        })
    }
    const userExists = await User.findOne({
        username: body.username,
        password: body.password
    });
    if(!userExists){
        return res.status(500).send({
            msg: "Invalid Inputs",
        })
    }
    const token = jwt.sign({
        userId: user._id
    }, JWT_SECRET);

    return res.json({
        token: token
    })
})
const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

		await User.updateOne({ _id: req.userId }, req.body);
	
    res.json({
        message: "Updated successfully"
    })
})

module.exports = router;