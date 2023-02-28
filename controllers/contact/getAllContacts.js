const { Contact } = require("../../models");
const getAllContacts = async (req, res, next) => {
	try {
		const { _id } = req.user;
		const contacts = await Contact.find({ owner: _id }).populate(
			"owner",
			"_id email"
		);
		res.status(200).json({
			message: "success",
			code: 200,
			data: contacts,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getAllContacts;
