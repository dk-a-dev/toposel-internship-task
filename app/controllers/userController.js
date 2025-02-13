import User from '../models/userModel';
const jwt = require('jsonwebtoken');
import { validationResult } from 'express-validator';

const JWT_SECRET=process.env.JWT_SECRET;

const register = async (req, res) => {
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const { username, email} = req.body;

        const checkExistingUser=await User.findOne({$or:[{username},{email}]});
        if(checkExistingUser){
            return res.status(400).json({message:"User already exists"});
        }

        const user=new User(req.body);
        await user.save();
        const userResponse = user.toObject();
        delete userResponse.password;
        res.status(201).json(userResponse);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

const login = async (req, res) => {
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if(!user|| !(await user.comparePassword(password))){
            return res.status(400).json({message:"Invalid credentials"});
        }
        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;
        const token=jwt.sign({userId:user._id},JWT_SECRET,{expiresIn:process.env.JWT_EXPIRY});
        res.json({ user: userResponse, token });
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports = { register, login };