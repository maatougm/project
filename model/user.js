// require mongoose
const mongoose = require("mongoose");

// schema
const {Schema, model} = mongoose;

// create schema
const UserSchema= new Schema ({
    
    name: { type:string , require :true },
    email: { type:string , require :true },
    password: { type:string , require :true },
    phone: { type:number , require :true },
    clas: { type:number , require :true },
    role: {type:string , require :true },
})

// export
module.exports= User = model("User" ,UserSchema);