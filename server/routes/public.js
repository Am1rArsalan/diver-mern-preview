const express = require("express");
const router = express.Router();
const { getAllTransActions , createTransAction  } = require("./../http/controllers/transActionController");
const { login , logout  } = require("./../http/controllers/authController");


router.post('/login' , login)
router.post('/logout' , logout)

//transActions
router.get("/transActions", getAllTransActions);
router.post("/transAction", createTransAction);

module.exports = router;
