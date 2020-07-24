const express = require("express");
const router = express.Router();
const user = require("./../models/user");

router.get("/user", (req, res) => {
  user
    .findById(req.user._id)
    .populate({
      path: "transActions",
        populate:{
            path : "from" ,
            ref : "users" ,
            select:'name'
        }
    })
    .then((foundedUser) => {
      return res.json({
        data: {
          name: foundedUser.name,
          username: foundedUser.username,
          transActions: foundedUser.transActions,
        },
        status: true,
      });
    })
    .catch((err) => {
      console.log("error In  Finding user ( User Controller )", err);
    });
});

module.exports = router;
