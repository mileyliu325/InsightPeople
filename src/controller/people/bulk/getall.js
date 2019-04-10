const People = require("../../../models/PeopleModel");

module.exports = async (req, res, next) => {
  const result = await People.find();
  if (result) {
    res.statusCode = 200;
    res.send(result);
  } else {
    res.statusCode = 404;
    res.send({
      msg: "no found!"
    });
  }
};
