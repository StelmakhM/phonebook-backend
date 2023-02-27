const express = require("express");
const {
	getCurrentUser,
	loginUser,
	logoutUser,
	registerUser,
} = require("../controllers/user");

const router = express.Router();

router.get("/current", getCurrentUser);
router.get("/logout", logoutUser);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
