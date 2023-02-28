const Joi = require("joi");

const addContactSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string(),
	phone: Joi.number(),
	favorite: Joi.bool(),
});

const updateContactSchema = Joi.object({
	name: Joi.string(),
	email: Joi.string(),
	phone: Joi.number(),
	favorite: Joi.bool(),
});

module.exports = {
	addContactSchema,
	updateContactSchema,
};
