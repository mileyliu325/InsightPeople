const Task = require("../../../models/TaskModel");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    body._id = mongoose.Types.ObjectId(body._id);
    const task = new Task(body);
    await task.save();
    res.statusCode = 201;
    res.send({
      msg: "created succed!",
      id: task._id
    });
  } catch (e) {
    res.statusCode = 500;
    res.send({
      msg: "task created failed"
    });
    next(e);
  }
};
