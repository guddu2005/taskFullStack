const express = require("express");
const userController = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/", userController.handleUserSignUp);
userRouter.post("/login", userController.handleUserLogin);
userRouter.get("/logout", userController.handleLogOut);

module.exports = userRouter;
