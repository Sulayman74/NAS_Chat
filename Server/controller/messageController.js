const { StatusCodes } = require("http-status-codes");
const Message = require("../models/messageModel");

exports.getAllMessages = async (req, res) => {
  const allMessages = await Message.find();
  res.status(StatusCodes.OK).json({
    status: "success",
    results: allMessages.length,
    allMessages,
  });
};

exports.createNewMessage = async (req, res) => {
  const newMessage = await Message.create(req.body);
  res.status(StatusCodes.CREATED).json({
    status: "success",
    data: newMessage,
  });
};

exports.getSingleMessage = async (req, res) => {
  const { id } = req.params;
  const message = await Message.findById(id);
  res.status(StatusCodes.OK).json({
    status: "success",
    message,
  });
};

exports.updateMessage = async (req, res) => {
  res.status(StatusCodes.OK).json({
    status: "success",
    msg: "message updated",
  });
};

exports.deleteMessage = async (req, res) => {
  const { id } = req.params;
  await Message.findByIdAndDelete(id);
  res.status(StatusCodes.NO_CONTENT).json({
    msg: null,
  });
};
