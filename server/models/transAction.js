const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transActionSchema = new Schema(
  {
    from: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    req: {
      type: Boolean,
      default: false,
    },
    accepted: {
      type: Boolean,
      default: false,
    },
    received: {
      type: Boolean,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TransAction = mongoose.model("transActions", transActionSchema);

module.exports = TransAction;
