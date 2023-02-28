const { Contact } = require("../../models");

const updateContactById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await Contact.findByIdAndUpdate(id, req.body, {
			new: true,
		});
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

module.exports = updateContactById;
