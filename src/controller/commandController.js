const tasks = require("../../tasks");
const path = require("path");
const fs = require("fs");
class CommandController {
  constructor() {}
  saveTasks() {
    const taskFilePath = path.join(__dirname, "../../tasks.js");
    const fileContent = `module.exports = ${JSON.stringify(tasks, null, 2)}`;
    fs.writeFileSync(taskFilePath, fileContent, "utf8");
  }
  async createTask(req, res, next) {
    const { title, description, dueDate, completed } = req.body;
    if (!title || !description || !dueDate || typeof completed !== "boolean") {
      return res.status(400).send("Invalid Arguments!");
    }
    tasks.ids = tasks.ids + 1;
    const newTask = {
      id: tasks.ids,
      title,
      description,
      dueDate,
      completed,
    };
    tasks.tasks.push(newTask);
    this.saveTasks();
    return res.status(201).send(tasks.tasks);
  }
  async updateTaks(req, res, next) {
    const id = req.params.id;
    const { title, description, dueDate, completed } = req.body;
    if (
      !id ||
      !title ||
      !description ||
      !dueDate ||
      typeof completed !== "boolean"
    ) {
      return res.status(400).send("Invalid Arguments!");
    }

    const taskIndex = tasks.tasks.findIndex((e) => e.id == id);
    if (taskIndex === -1) {
      return res.status(404).send("Task not Found");
    }
    tasks.tasks[taskIndex] = { id, title, description, dueDate, completed };
    this.saveTasks();
    return res.status(200).send(tasks.tasks[taskIndex]);
  }
  async deleteTask(req, res, next) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).send("Invalid Arguments!");
    }
    const taskIndex = tasks.tasks.findIndex((e) => e.id == id);
    if (taskIndex === -1) {
      return res.status(404).send("Task not Found");
    }

    tasks.tasks.splice(taskIndex, 1);
    this.saveTasks();
    return res.status(200).send({ id, delete: true });
  }
}

module.exports = () => new CommandController();
