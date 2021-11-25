const TransAction = require("../../models/transAction");

async function getAllTransActions(req, res) {
  try {
    const transActions = await TransAction.find({}).populate({
      path: "from",
      select: "name",
      ref: "users",
    });

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
      ...req.body,
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

module.exports = { getAllTransActions, createTransAction };
