const express = require("express");
const {
	addNewContact,
	deleteContactById,
	getAllContacts,
	updateContactById,
} = require("../controllers/contact");
const { auth, validateJoi } = require("../middlewares");
const { addContactSchema, updateContactSchema } = require("../schemas");

const router = express.Router();

router.get("/contacts", auth, getAllContacts);
router.post("/contacts", auth, validateJoi(addContactSchema), addNewContact);
router.patch(
	"/contacts/:id",
	auth,
	validateJoi(updateContactSchema),
	updateContactById
);
router.delete("/contacts/:id", auth, deleteContactById);

module.exports = router;
