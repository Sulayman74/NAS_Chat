const { StatusCodes } = require("http-status-codes");
const Message = require("../Models/messageModel");

// exports.getAllMessages = async (req, res) => {
//   const allMessages = await Message();
//   res.status(StatusCodes.OK).json({
//     status: "success",
//     results: allMessages.length,
//     allmessages,
//   });
// };

exports.createNewMessage = async (req, res) => {
  const newMessage = await Message.create(req.body);
  res.status(StatusCodes.CREATED).json({
    status: "success",
    results: newMessage,
    // data: newMessage,
  });
};

// exports.getSingleUser = async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findById(id);
//   res.status(StatusCodes.OK).json({
//     status: "success",
//     user,
//   });
// };

// exports.updateUser = async (req, res) => {
//   res.status(StatusCodes.OK).json({
//     status: "success",
//     msg: "Update user",
//   });
// };

// exports.deleteUser = async (req, res) => {
//   const { id } = req.params;
//   await User.findByIdAndDelete(id);
//   res.status(StatusCodes.NO_CONTENT).json({
//     msg: null,
//   });
// };