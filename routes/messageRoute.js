const express = require("express");
const router = express.Router();
const messageController = require("../controller/messageController");

router
  .route("/")
//   .get(messageController.getAllMessages)
  .post(messageController.createNewMessage);

router
  .route("/:id")
//   .get(messageController.getSingleUser)
//   .patch(messageController.updateUser)
//   .delete(messageController.deleteUser);

module.exports = router;