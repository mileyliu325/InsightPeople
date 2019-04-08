const mongoose = require("mongoose");

const { Schema } = mongoose;

const ShiftSchema = new Schema({
  startTime: Date,
  endTime: String,
  taskId: String
});

const shiftModel = mongoose.model("shift", ShiftSchema);

module.exports = shiftModel;
