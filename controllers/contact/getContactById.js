const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const getContactById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const contact = await Contact.findById(id);
		if (!contact) {
			throw new NotFound(`Contact with id ${id} not found`);
		}
		res.status(200).json({
			message: "Success",
			code: 200,
			data: contact,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getContactById;
