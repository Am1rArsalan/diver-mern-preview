const express = require("express");
const router = express.Router();
const { getAllTransActions , createTransAction  } = require("./../http/controllers/transActionController");


router.get("/transActions", getAllTransActions);
router.post("/transAction", createTransAction);

module.exports = router;
