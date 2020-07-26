const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      validate: {
        validator: (value) => value.length > 2,
        message: "Longer Than 2 Please",
      },
    },

    username: {
      type: String,
      required: [true, "Name is required"],
      validate: {
        validator: (value) => value.length > 2,
        message: "Longer Than 2 Please",
      },
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    about: {
      type: String,
      required: false,
    },

    image: {
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

UserSchema.methods.checkPass = (pass, hash) => {
  return bcrypt.compareSync(pass, hash);
};

UserSchema.virtual("transActions", {
  ref: "transActions",
  localField: `_id`,
  foreignField: "user",
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
