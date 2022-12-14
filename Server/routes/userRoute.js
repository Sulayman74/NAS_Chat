const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router
  .route("/")
  .get(userController.getAllUsers)
  // .post(userController.createNewUser);

router
  .route("/:id")
  .get(userController.getSingleUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
