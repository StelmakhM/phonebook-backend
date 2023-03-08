const express = require("express");
const {
	addNewContact,
	deleteContactById,
	getAllContacts,
	updateContactById,
	getContactById,
} = require("../controllers/contact");
const { auth, validateJoi } = require("../middlewares");
const { addContactSchema, updateContactSchema } = require("../schemas");

const router = express.Router();

router.get("/", auth, getAllContacts);
router.get("/:id", auth, getContactById);
router.post("/", auth, validateJoi(addContactSchema), addNewContact);
router.patch("/:id", auth, validateJoi(updateContactSchema), updateContactById);
router.delete("/:id", auth, deleteContactById);

module.exports = router;
