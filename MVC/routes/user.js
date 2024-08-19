const express = require("express");
const userController = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/", userController.handleUserSignUp);
userRouter.post("/login", userController.handleUserLogin);

module.exports = userRouter;
