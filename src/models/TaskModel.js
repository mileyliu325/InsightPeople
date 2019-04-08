const mongoose = require("mongoose");

const { Schema } = mongoose;
//assignTo: people's array
const TaskSchema = new Schema({
  postPerson: String,
  title: String
  // assignTo: Array,
  // dueDate: Date
});

const taskModel = mongoose.model("task", TaskSchema);

module.exports = taskModel;
