import express from 'express'
import jwt from 'jsonwebtoken'
import { User } from '../models/UserModel.js';
const UserRoute = express.Router()

UserRoute.post('/createuser',async(req,res)=>{
    const {firstname,lastname,email,password} = req.body;
    const user = await User.findOne({email:req.body.email})
    if(user){
        return res.status(409).send({message:"User with given email already exists"})
    }
    await new User({...req.body}).save()
    res.status(201).send({message:"User created successfully"})
})

UserRoute.post('/loginuser',async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email:email})
    if(!user){
        return res.status(404).send({message:"User with given email does not exist"})
    }
    if(user.password !== password){
        return res.status(401).send({message:"Invalid credentials"})
    }
    const token = jwt.sign({_id:user._id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"})
    
    res.json({message:"user logged in successfully",token})
})



export default UserRoute