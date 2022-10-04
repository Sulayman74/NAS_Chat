const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.route("/register").post(authController.register);

router.route("/login").post(authController.login);

router;
//   .route("/:id")
//   .get(userController.getSingleUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
