const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

userSchema.methods.createJWT = function () {
	const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;
	const token = jwt.sign({ id: this._id }, JWT_SECRET, {
		expiresIn: JWT_EXPIRES_IN,
	});
	this.token = token;
};

const User = model("user", userSchema);

module.exports = User;
