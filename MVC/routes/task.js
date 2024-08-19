const express = require("express");
const taskController = require("../controllers/task");
const taskRouter = express.Router();

taskRouter.get("/",taskController.taskIndex);
taskRouter.get("/new" ,taskController.newTask);
taskRouter.post("/",taskController.postTask)
taskRouter.get("/:id" , taskController.taskDetails);
taskRouter.get("/edit/:id" , taskController.editTaskGet);
taskRouter.put("/:id" ,taskController.editTaskPost);
taskRouter.delete("/:id" , taskController.deleteTask)

module.exports =taskRouter;