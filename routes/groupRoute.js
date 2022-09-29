const express = require("express");
const router = express.Router();
const groupController = require("../controller/groupController");

router.route("/").get(groupController.createNewGroup);
// .post(groupController);

router.route("/:id");
//   .get(groupController)
//   .patch(groupController)
//   .delete(groupController);

module.exports = router;
