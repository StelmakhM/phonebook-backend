const { User } = require("../../models");
const { Conflict } = require("http-errors");

const registerUser = async (req, res, next) => {
	try {
		const { name, email, password } = req.body;
		const user = await User.findOne({ email });
		if (user) {
			throw new Conflict(`User with email ${email} already exist`);
		}

		const newUser = new User({
			name,
			email,
		});
		newUser.setPassword(password);
		newUser.createJWT();
		await newUser.save();

		res.status(201).json({
			message: "Success",
			code: 201,
			user: {
				name,
				email,
				token: newUser.token,
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = registerUser;
