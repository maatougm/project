// require mongoose
const mongoose=require("mongoose");
// creare db
const connectDB= async () => {
    try{
        await mongoose.connect("mongodb+srv://moudafarmaatoug:bzPtcY8v6zlmjEdD@cluster0.cibadbc.mongodb.net/")
        console.log("connected")
    } catch (error){
        console.log(`can not connected ${error} `);
    }

};
//export
module.exports = connectDB