const express = require("express");
const router = express.Router();
const { authMiddleWare } = require("./../http/middlewares/index") ;

router.use(require('./public')) ;

router.use(authMiddleWare , require('./private')) ;

module.exports = router;
