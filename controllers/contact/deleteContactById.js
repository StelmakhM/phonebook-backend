const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const deleteContactById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await Contact.findByIdAndDelete(id);
		if (!result) {
			throw new NotFound(`Contact with id ${id} not found`);
		}
		res.status(200).json({
			message: "success",
			code: 200,
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = deleteContactById;
