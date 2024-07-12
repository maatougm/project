const jwt = require("jsonwebtoken");
const User = require("../model/user");

const isAuth = async (req, res, next) => {
	try {
		// token => headers
		const token = req.headers["authorization"];
		if (!token) {
			return res.status(401).send({ errors: [{ msg: "Not authorized  !" }] });
		}
		const decoded = jwt.verify(token, process.env.SECRETCKEY); // [id]
		const foundUser = await User.findOne({ _id: decoded.id });
		
		if (!foundUser) {
			return res.status(401).send({ errors: [{ msg: "Not authorized  !" }] });
		}
		if  (foundUser.role !="student") {
			console.log(foundUser.role )
			return res.status(401).send({ errors: [{ msg: "Not student !" }] });
		}
		req.user = foundUser;
		next();
	} catch (error) {
		return res.status(401).send({ errors: [{ msg: "Not authorized 3 !" }] });
	}
};

module.exports = isAuth;
