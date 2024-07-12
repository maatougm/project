//require
const user = require("../model/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.register = async (req, res) => {
  try {
    const { name, email, password, phone, clas, role,code} = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "email alredy used 😢" }] });
    }
    
    //hachage pass
    const saltRound = 10;
    const hashedpass = await bcrypt.hash(password, saltRound);
    //add newuser
    const newUser = new User({ ...req.body });
    newUser.password = hashedpass;

    //asigning the role and class
    if (code.charAt(0)=="0") {
      newUser.role="admin";
    }  else if (code.charAt(0)=="1") {
      newUser.role="instractor";
    } else if (code.charAt(0)=="2")  {
    (newUser.role="student") && (newUser.clas=code.substring(1, 3))
    }

    //save
    await newUser.save();
    //token
    const token = jwt.sign(
      {
         id: newUser._id,
      },
      process.env.SECRETCKEY,
      //token expire in
      { expiresIn: process.env.JWT_EXPIRE }
    );
    res.status(200).send({ msg: "regestre succeeded 😊", user: newUser });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: `eroor 😱  ${error}` }] });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check user
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res
        .status(401)
        .send({ errors: [{ msg: "wrong Email or Password 😢" }] });
    }
    const checkpass = await bcrypt.compare(password, foundUser.password);
    if (!checkpass) {
      return res
        .status(401)
        .send({ errors: [{ msg: "wrong Email or Password 😢" }] });
    }
    //token
    

    const token = jwt.sign(
      {
        id: foundUser._id,
      },
      process.env.SECRETCKEY,
      { expiresIn: process.env.JWT_EXPIRE }
    );
    res.status(200).send({ msg: "login succeeded 😊", foundUser, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: `can't login 😱 ${error}` }] });
  }
};
