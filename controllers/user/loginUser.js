const { User } = require("../../models");
const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user || !user.comparePasswords(password)) {
			throw new Unauthorized("Email or password is wrong");
		}
		const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;
		const token = jwt.sign({ id: user._id }, JWT_SECRET, {
			expiresIn: JWT_EXPIRES_IN,
		});
		await User.findByIdAndUpdate(user.id, { token });
		res.status(200).json({
			message: "success",
			code: 200,
			data: {
				token,
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = loginUser;
