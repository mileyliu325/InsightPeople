const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShiftSchema = new Schema({
  startTime: { type: Date, default: null },
  endTime: { type: Date, default: null },
  taskId: String,
  area: String
});

const shiftModel = mongoose.model("shift", ShiftSchema);
module.exports = shiftModel;
