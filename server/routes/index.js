const express = require("express");
const router = express.Router();
const { TransAction } = require("../models/");

router.get("/transActions", getAllTransActions);
router.post("/transAction", createTransAction);

async function getAllTransActions(req, res) {
  try {
    const transActions = await TransAction.find({});
    console.log(transActions);
    res.json({
      status: true,
      transActions,
    });
  } catch (error) {
    console.log("Error In Fetching data ", error);
  }
}

async function createTransAction(req, res) {
  try {
    const newTransAction = new TransAction({
      ...req.body ,
      from: "5f17efb2902a6da6ddfb6640",
    });

    await newTransAction.save();
    return res.json({
      ...req.body,
    });
  } catch (error) {
    console.log("Error In creating the TransAction");
  }
}


module.exports = router;
