const userRouter = require("express").Router();
//const { userOperation } = require("../operations");
const { createNewUser, getAllUser } = require("../controllers/user");
//import userController as controller
const { userController: controller } = require("../controllers");

userRouter
  .route("/user")
  .post(controller.createNewUser)
  .get(controller.getAllUser);

module.exports = userRouter;
