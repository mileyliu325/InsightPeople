const mongoose = require("mongoose");

const { Schema } = mongoose;
//assignTo:  people's ids
const TaskSchema = new Schema({
  postPerson: String,
  title: String,
  assignTo: [String],
  dueDate: String
});

const taskModel = mongoose.model("task", TaskSchema);

module.exports = taskModel;
