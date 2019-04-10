const Task = require("../../../models/TaskModel");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
  try {
    let { ids } = req.params;
    ids = ids.split(",");

    const isValid = ids.every(id => mongoose.Types.ObjectId.isValid(id));

    if (isValid) {
      const objectIds = ids.map(id => new mongoose.Types.ObjectId(id));

      const result = await Task.find({
        _id: {
          $in: objectIds
        }
      });

      if (result.length === 0) {
        res.statusCode = 404;
        res.send({
          notfound: ids,
          result
        });
      } else {
        const resultIds = {};
        result.forEach(item => (resultIds[item._id.toString()] = true));
        const notfound = ids.filter(id => !resultIds[id]);

        res.statusCode = 200;
        res.send({
          notfound,
          result
        });
      }
    } else {
      res.statusCode = 400;
      res.send({
        msg: "ids are invalid!"
      });
    }
  } catch (e) {
    next(e);
  }
};
