// require mongoose

const mongoose = require('mongoose');
// creare db

const connectDB= async () => {
    console.log("1")
    console.log("trying to connect")
    try{
        
        await mongoose.connect(process.env.DB_URI)
        console.log("connected")
    } catch (error){
        console.log(`can not connected ${error} `);
    }

};
//export
module.exports = connectDB