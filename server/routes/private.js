const express = require("express");
const router = express.Router();
const { getData } = require("../http/controllers/userController");

router.get("/user", getData);

module.exports = router;
