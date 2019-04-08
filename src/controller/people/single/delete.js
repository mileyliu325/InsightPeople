const People = require("../../../models/PeopleModel");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.statusCode = 400;
      res.send({
        id,
        msg: "id is invalid"
      });
    } else {
      const result = await People.deleteOne({
        _id: new mongoose.Types.ObjectId(id)
      });
      if (result.deletedCount === 0) {
        res.statusCode = 404;
        res.send({
          id,
          msg: "not found"
        });
      } else {
        res.statusCode = 200;
        res.send({
          id,
          msg: "delete succed!"
        });
      }
    }
  } catch (e) {
    next(e);
  }
};
