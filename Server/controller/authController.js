const mongoose = require("mongoose");
const User = require("../models/userModel");
const { StatusCodes } = require("http-status-codes");

exports.register = async (req, res) => {
  const { email, name, password, confirmPassword, pseudo } = req.body;
  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new Error("Sorry this email already exists");
  }
  const user = await User.create({
    email,
    name,
    password,
    confirmPassword,
    pseudo,
  });
  if (!user) {
    throw new Error("Oops.. Someting went wrong try again later");
  }
  res.status(StatusCodes.CREATED).json({
    status: "success",
    data: user,
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("Please provide email and/or password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Sorry No user found");
  }
  const passwordMatch = await user.comparePassword(password);
  if (!passwordMatch) {
    throw new Error("Sorry password does not match");
  }

  res.status(StatusCodes.OK).json({
    status: "success",
    msg: "Ok you are logged in",
  });
};


