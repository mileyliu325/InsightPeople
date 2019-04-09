const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShiftSchema = new Schema({
  shift_id: mongoose.Types.ObjectId,
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date, default: Date.now },
  taskId: String,
  area: String
});

const PeopleSchema = new Schema({
  name: String,
  email: String,
  role: String,
  phone: String,
  wage: String,
  birthday: { type: Date, default: Date.now },
  shifts: [ShiftSchema]
});

const peopleModel = mongoose.model("people", PeopleSchema);

module.exports = peopleModel;
