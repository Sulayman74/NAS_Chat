const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema(
  {
    groupName: {
      type: String,
      required: [true, "You have to provide a group name"],
      minlength: 5,
      maxlength: 20,
    },
    users: {
      type: mongoose.Schema.ObjectId,
      ref: "userModel",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Group", GroupSchema);
