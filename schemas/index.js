const { userLoginSchema, userRegisterSchema } = require("./user");
const { addContactSchema, updateContactSchema } = require("./contact");

module.exports = {
	userLoginSchema,
	userRegisterSchema,
	addContactSchema,
	updateContactSchema,
};
