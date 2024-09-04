const tasks = require("../../tasks");
class QueryController {
  constructor() {}

  async getAllTasks(req, res, next) {
    return res.status(200).send(tasks.tasks);
  }
  async getTaskById(req, res, next) {
    const id = req.params.id;
    if (!id) {
      return res.status(400).send("Invalid Arguments!");
    }
    const taskIndex = tasks.tasks.findIndex((e) => e.id == id);
    if (taskIndex === -1) {
      return res.status(404).send("Task not Found");
    }
    return res.status(200).send(tasks.tasks[taskIndex]);
  }
}

module.exports = () => new QueryController();
