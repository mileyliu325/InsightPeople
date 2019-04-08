const People = require("../../../models/PeopleModel");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.statusCode = 400;
      res.send({
        msg: "id is invalid!"
      });
    } else {
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
      const result = await People.findOne({
        _id: new mongoose.Types.ObjectId(id)
      });
      if (result) {
        Object.assign(result, body);
        const assign = new People(result);
        await assign.save();
        res.statusCode = 200;
        res.send({
          msg: "updated succeed!",
          id: assign._id
        });
      } else {
        Object.assign(body, { _id: new mongoose.Types.ObjectId(id) });
        const assign = new People(body);
        await assign.save();
        res.statusCode = 201;
        res.send({
          msg: "created succeed!",
          id: assign._id
        });
      }
    }
  } catch (e) {
    res.statusCode = 500;
    res.send({
      msg: "people update failed!"
    });
    next(e);
  }
};
