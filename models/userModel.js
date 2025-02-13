import mongoose from "mongoose";
import { passwordMiddleware } from "../app/utils/authUtils.js";

export const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true        
    },
    fullName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:['male','female','others'],
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    country:{
        type:String,
        required:true
    },
}, {
    timestamps: true
});

passwordMiddleware(UserSchema);

const User = mongoose.model("User", UserSchema);
export default User;