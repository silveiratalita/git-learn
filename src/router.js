const commandController = require("./controller/commandController");
const express = require("express");
const command = commandController();
const queryControoler = require("./controller/queryController");
const query = queryControoler();

const router = express.Router();

router.post("/tasks", command.createTask.bind(command));
router.put("/tasks/:id", command.updateTaks.bind(command));
router.delete("/tasks/:id", command.deleteTask.bind(command));

router.get("/tasks", query.getAllTasks.bind(query));
router.get("/tasks/:id", query.getTaskById.bind(query));

module.exports = { router };
