const Joi = require("joi");

const addContactSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().empty("").default(null),
	phone: Joi.number().empty("").default(null),
	address: Joi.string().empty("").default(null),
	favorite: Joi.bool(),
});

const updateContactSchema = Joi.object({
	name: Joi.string(),
	email: Joi.string(),
	phone: Joi.number(),
	address: Joi.string(),
	favorite: Joi.bool(),
});

module.exports = {
	addContactSchema,
	updateContactSchema,
};
