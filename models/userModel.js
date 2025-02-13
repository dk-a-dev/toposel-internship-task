const mongoose = require("mongoose");
const { Schema } = mongoose;

export const UserSchema=new Schema({
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
},{
    timestamps:true
});

const User = mongoose.model("User", UserSchema);
module.exports = User;