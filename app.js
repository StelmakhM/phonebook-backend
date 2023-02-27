const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { contactsRouter, usersRouter } = require("./routes");

const app = express();

app.use(cors());
app.use(morgan("short"));
app.use(express.json());

app.use("/users", usersRouter);
app.use("/contacts", contactsRouter);

app.use((req, res) => {
	res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
	const { status, message = "Server error" } = err;
	res.status(status).json({ message });
});

module.exports = app;
