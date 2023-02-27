const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
		},
		email: {
			type: String,
			required: [true, "Password is required"],
		},
		password: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
		},
		token: {
			type: String,
			default: null,
		},
	},
	{ versionKey: false, timestamps: true }
);

userSchema.methods.setPassword = function (password) {
	this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePasswords = function (password) {
	return bcrypt.compareSync(password, this.password);
};

const User = model("user", userSchema);

module.exports = User;
