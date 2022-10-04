const express = require("express");
const router = express.Router();
const messageController = require("../controller/messageController");

router
  .route("/")
  .get(messageController.getAllMessages)
  .post(messageController.createNewMessage);

router
  .route("/:id")
  .get(messageController.getSingleMessage)
  // .patch(messageController.updateMessage)
  .delete(messageController.deleteMessage);

module.exports = router;