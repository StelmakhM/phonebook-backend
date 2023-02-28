const express = require("express");
const {
	getCurrentUser,
	loginUser,
	logoutUser,
	registerUser,
} = require("../controllers/user");
const { validateJoi, auth } = require("../middlewares");
const { userLoginSchema, userRegisterSchema } = require("../schemas");

const router = express.Router();

router.get("/current", auth, getCurrentUser);
router.get("/logout", auth, logoutUser);
router.post("/register", auth, validateJoi(userRegisterSchema), registerUser);
router.post("/login", auth, validateJoi(userLoginSchema), loginUser);

module.exports = router;
