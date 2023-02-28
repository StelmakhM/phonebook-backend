const express = require("express");
const {
	addNewContact,
	deleteContactById,
	getAllContacts,
	updateContactById,
} = require("../controllers/contact");
const auth = require("../middlewares");

const router = express.Router();

router.get("/contacts", auth, getAllContacts);
router.post("/contacts", auth, addNewContact);
router.patch("/contacts/:id", auth, updateContactById);
router.delete("/contacts/:id", auth, deleteContactById);

module.exports = router;
