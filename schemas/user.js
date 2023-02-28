const Joi = require("joi");

const userRegisterSchema = Joi.object({
	name: Joi.string().required(),
	password: Joi.string().required(),
	email: Joi.string().required(),
});

const userLoginSchema = Joi.object({
	password: Joi.string().required(),
	email: Joi.string().required(),
});

module.exports = {
	userRegisterSchema,
	userLoginSchema,
};
