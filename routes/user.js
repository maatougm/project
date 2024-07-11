//require
const express = require("express");
const { register, login } = require("../controler/user");
//router
const router = express.Router();

//test route
router.get("/test", (req, res) => {
	res.send("hello world");
});

//register
router.post("/register",register );


//login
router.post("/login" , login);
//export
module.exports = router;
