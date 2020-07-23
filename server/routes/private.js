const express = require("express");
const router = express.Router();


router.get("/user", (req,res) => {
   console.log("Hellooooooooo")  ;
    res.json({ name :  req.user.name , username : req.user.username });

});

module.exports = router;
