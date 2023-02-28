const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");
require("dotenv").config();
const { User } = require("../models");

const auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const { JWT_SECRET } = process.env;
		const { id } = jwt.verify(token, JWT_SECRET);
		const user = await User.findById(id);
		if (!user || !user.token) {
			throw new Unauthorized("");
		}
		req.user = user;
		next();
	} catch (error) {
		next(error);
	}
};

module.exports = auth;
