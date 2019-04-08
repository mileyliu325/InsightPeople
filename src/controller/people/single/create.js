const People = require("../../../models/PeopleModel");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    if (body._id) {
      if (!mongoose.Types.ObjectId.isValid(body._id)) {
        res.statusCode = 400;
        res.send({
          msg: "body._id is invalid!"
        });
        return;
      } else {
        body._id = new mongoose.Types.ObjectId(body._id);
      }
    }
    const assignment = new People(body);
    await assignment.save();
    res.statusCode = 201;
    res.send({
      msg: "created succeed!",
      id: assignment._id
    });
  } catch (e) {
    res.statusCode = 500;
    res.send({
      msg: "person created failed!"
    });
    next(e);
  }
};
