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
		await newUser.save();
		res.status(201).json({
			message: "Success",
			code: 201,
			data: {
				name,
				email,
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = registerUser;
