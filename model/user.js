// require mongoose
const mongoose = require("mongoose");

// schema
const {Schema, model} = mongoose;

// create schema
const UserSchema= new Schema ({
    
    name: { type:String , require :true },
    email: { type:String , require :true },
    password: { type:String , require :true },
    phone: { type:Number , require :true },
    clas: { type:String , require :false },
    role: {type:String , require :false },
    code:{ type:String , require :true },
})

// export
module.exports= User = model("User" ,UserSchema);