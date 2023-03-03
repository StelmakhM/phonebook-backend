const { User } = require("../../models");

const getCurrentUser = async (req, res, next) => {
	try {
		const { _id } = req.user;
		const currentUser = await User.findById(_id);
		const { name, email, token } = currentUser;
		res.status(200).json({
			message: "success",
			code: 200,
			user: {
				name,
				email,
				token,
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getCurrentUser;
