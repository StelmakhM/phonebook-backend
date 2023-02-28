const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const addNewContact = async (req, res, next) => {
	try {
		const { _id } = req.user;
		const result = await Contact.create({ ...req.body, owner: _id });
		res.status(201).json({
			message: "success",
			code: 201,
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = addNewContact;
