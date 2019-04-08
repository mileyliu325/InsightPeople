const Task = require("../../../models/TaskModel");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.statusCode = 400;
      res.send({
        msg: "id is invalid"
      });
    } else {
      const result = await Task.findOne({
        _id: new mongoose.Types.ObjectId(id)
      });
      if (result) {
        //update body's element with result
        Object.assign(result, body);
        const assign = new Task(body);
        await assign.save();
        res.statusCode = 200;
        res.send({
          msg: "update succeed!",
          id: assign._id
        });
      } else {
        //created a new one
        Object.assign(body, { _id: new mongoose.Types.ObjectId(id) });
        const assign = new Task(body);
        await assign.save();
        res.statusCode = 201;
        res.send({
          msg: "created succeed!",
          id: assign._id
        });
      }
    }
  } catch (e) {
    res.statusCode = 500;
    res.send({
      msg: "task update failed"
    });
    next(e);
  }
};
