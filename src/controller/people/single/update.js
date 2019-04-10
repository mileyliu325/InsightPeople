const People = require("../../../models/PeopleModel");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    const { id } = req.params;
    //checi if person id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.statusCode = 400;
      res.send({
        msg: "id is invalid!"
      });
    } else {
      //check if shifts exist, if not  create a new one
      if (body.shifts.count > 0) {
        if (
          body.shifts[0]._id &&
          !mongoose.Types.ObjectId.isValid(body.shifts[0]._id)
        ) {
          res.statusCode = 400;
          res.send({
            msg: "shiftid is invalid!"
          });
          return;
        } else {
          body.shifts[0]._id = new mongoose.Types.ObjectId(body.shifts[0]._id);
        }
      }
      // transfer id(string) to objectId and check if exits
      const result = await People.findOne({
        _id: new mongoose.Types.ObjectId(id)
      });
      if (result) {
        //only update elements in body
        Object.assign(result, body);
        //update database
        const assign = new People(result);
        await assign.save();
        res.statusCode = 200;
        res.send({
          msg: "updated succeed!",
          id: assign._id
        });
      } else {
        // not record in database, create new
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
