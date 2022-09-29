const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "You have to provide a name"],
      minlength: 5,
      maxlength: 20,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "You have to provide a name"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
    },
    pseudo: {
      type: String,
      unique: true,
      required: [true, "You have to provide a pseudo"],
      minlength: 5,
      maxlength: 10,
    },
    photo: {
      type: String,
      default: 'defaultUser.jpg'
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    password: {
      type: String,
      required: [true, "You have to provide a password"],
      minlength: 8,
    },
    confirmPassword: {
      type: String,
      required: [true, "You have to confirm your password"],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "Passwords does not match",
      },
    },
      groups: {
        type: mongoose.Schema.ObjectId,
        ref: "groupModel",
        required: true,
      },
      active: {
        type: Boolean,
        default: true,
        select: false
      },
    },
  { timestamps: true }
);
