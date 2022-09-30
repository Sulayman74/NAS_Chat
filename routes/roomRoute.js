const express = require("express");
const router = express.Router();
const roomController = require("../controller/roomController");

// router.route("/").get(roomController.createNewroom);
// // .post(roomController);

// router.route("/:id");
// //   .get(roomController)
// //   .patch(roomController)
// //   .delete(roomController);

router
  .route("/")
  .get(roomController.getAllRooms)
  .post(roomController.createNewRoom);

router
  .route("/:id")
  .get(roomController.GetSingleRoom)
  .patch(roomController.updateRoom)
  .delete(roomController.deleteRoom);

module.exports = router;
