const express = require("express");

const router = express.Router();

router.get("/contacts", getAllContacts);
router.post("/contacts", addNewContact);
router.delete("/contacts/:id", deleteContact);
router.patch("/contacts/:id", updateContact);

module.exports = router;
