// 1 require express
const express = require('express');

 // 2 create instance
const app = express();

//5  require dotenv
  require("dotenv").config();

  // 6connect db
const connectDB = require("./config/connectDB");
connectDB;




//routing
//7 middelware  globale
app.use(express.json());


  // 3port 
const PORT = process.env.PORT;

//4 create server

app.listen(PORT, (err) => {
	err ? console.err(err) : console.log(`Server running on port ${PORT} ...`);
});