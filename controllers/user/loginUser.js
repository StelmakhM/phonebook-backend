const { User } = require("../../models");
const { Unauthorized } = require("http-errors");

const loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user || !user.comparePasswords(password)) {
			throw new Unauthorized("Email or password is wrong");
		}
		user.createJWT();
		user.save();
		res.status(200).json({
			message: "success",
			code: 200,
			user: {
				name: user.name,
				email,
				token: user.token,
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = loginUser;
