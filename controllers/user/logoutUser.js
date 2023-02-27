const { User } = require("../../models");

const logoutUser = async (req, res, next) => {
	try {
		const { _id } = req.user;
		await User.findByIdAndUpdate(_id, { token: null });
		res.status(200).json({
			message: "success",
			code: 200,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = logoutUser;
