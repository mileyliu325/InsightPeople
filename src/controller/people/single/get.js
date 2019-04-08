const People = require("../../../models/PeopleModel");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.statusCode = 400;
      res.send({
        msg: "id is invalid!"
      });
    } else {
      const result = await People.findOne({
        _id: new mongoose.Types.ObjectId(id)
      });
      if (!result) {
        res.statusCode = 404;
        res.send({
          id,
          msg: "not found!"
        });
      } else {
        res.statusCode = 200;
        res.send(result);
      }
    }
  } catch (e) {
    next(e);
  }
};
