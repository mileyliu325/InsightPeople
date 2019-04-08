const mongoose = require("mongoose");

const { Schema } = mongoose;

const PeopleSchema = new Schema({
  name: String,
  email: String,
  role: String,
  phone: String,
  wage: String
  // birthday: Date,
  // shifts: Array
});

const peopleModel = mongoose.model("people", PeopleSchema);

module.exports = peopleModel;
