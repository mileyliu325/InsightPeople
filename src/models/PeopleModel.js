const mongoose = require("mongoose");
const ShiftSchema = require("./ShiftfModel");

const { Schema } = mongoose;

const PeopleSchema = new Schema({
  name: String,
  email: String,
  role: String,
  phone: String,
  wage: String,
  birthday: { type: Date, default: null },
  shifts: [ShiftSchema]
});

const peopleModel = mongoose.model("people", PeopleSchema);

module.exports = peopleModel;
