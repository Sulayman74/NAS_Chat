const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema(
  {
    // ? est ce qu'on met une image de profil? Sulayman

    groupName: {
      type: String,
      required: [true, "You have to provide a group name"],
      minlength: 5,
      maxlength: 20,
    },

    // createdAt: {
    //   type: Date,
    //   default: Date.now(),
    // },

    users: {
      type: mongoose.Schema.ObjectId,
      ref: "userModel",
      required: true,
    },
  },
  { timestamps: true }
);
