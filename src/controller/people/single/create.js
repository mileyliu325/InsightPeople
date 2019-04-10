const People = require("../../../models/PeopleModel");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    body._id = new mongoose.Types.ObjectId(body._id);
    const people = new People(body);
    await people.save();
    res.statusCode = 201;
    res.send({
      msg: "created succeed!",
      id: people._id
    });
  } catch (e) {
    res.statusCode = 500;
    res.send({
      msg: "person created failed!"
    });
    next(e);
  }
};
