import express from 'express';
import jwt from 'jsonwebtoken';
const router = express.Router();
import User from './db.js';
import authenticate from './auth.js';
import zod from 'zod';

const loginSchema = zod.object({
    username: zod.string().min(3),
    password: zod.string().min(4)
});
const signupSchema = zod.object({
    username: zod.string().min(3),
    password: zod.string().min(4),
    firstName: zod.string().min(1),
    lastName: zod.string().min(1),
    });


router.get("/login", async (req, res)=>{
    const username = req.query.username;
    const password = req.query.password;
    const success = loginSchema.safeParse({username, password});
    if(!success.success){
        return res.status(400).send("wrong input Credentials");
    }

    const user = await User.findOne({username: username, password: password});
    if(!user){
        return res.status(400).send("Invalid Credentials");
    }
    if(user.password !== password){
        return res.status(400).send("Invalid Credentials");
    }

    const token = jwt.sign({username, password}, "Se5ret", {expiresIn: '1h'});

    res.json({message: "Login successful", token });
})
router.get("/signup", async (req, res)=>{
    const username = req.query.username;
    const password = req.query.password;
    const sucess = signupSchema.safeParse({username, password});
    if(!sucess.success){
        return res.status(400).send("Invalid Credentials");
    }
    const token = jwt.sign({username, password}, "Se5ret", {expiresIn: '1h'});

    const user = await User.findOne({username: username});
    if(user){
        return res.status(400).send("User already exists");
    }

    const newUser = new User({
        username: username,
        password: password
    });

    await newUser.save();
    res.json({ token, message: "User created successfully"});
})


router.get("/profile", authenticate, async (req, res)=>{
    const username = req.query.username;
    const user = await User.findOne({username: username});
    if(!user){
        return res.status(400).send("User not found");
    }
    res.json({username: user.username, firstName: user.firstName, lastName: user.lastName});
})  


export const userRoutes = router;