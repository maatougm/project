//require
const express = require("express");
const { register, login } = require("../controler/user");
const isAuth = require("../middleware/isAuth");
//router
const router = express.Router();

//test route
router.get('/test' , (req, res) => {
	res.send("hello gingle");
});

//register
router.post("/register",register );


//login
router.post("/login" , login);
//student
router.get('/student',isAuth, (req, res) => {
	res.send(req.user);})
//export
module.exports = router;
