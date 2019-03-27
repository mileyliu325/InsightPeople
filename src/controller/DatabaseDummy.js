// "use strict";
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/employee");

const db = mongoose.connection;

const { Schema } = mongoose;

// Schema;
(async () => {
  var peopleSchema = new Schema({
    name: String,
    email: String,
    role: String
  });

  // Model;
  const peopleModel = mongoose.model("people", peopleSchema);

  peopleModel.remove({}, function(err) {
    console.log("collection removed");
  });

  // Document
  const amy = new peopleModel({
    name: "Amy",
    email: "Amy@gamil.com",
    role: "admin"
  });
  const bob = new peopleModel({
    name: "Bob",
    email: "Bob@gamil.com",
    role: "admin"
  });
  const cindy = new peopleModel({
    name: "Cindy",
    email: "Cindy@gamil.com",
    role: "admin"
  });
  const dean = new peopleModel({
    name: "Dean",
    email: "Dean@gamil.com",
    role: "employee"
  });
  const ella = new peopleModel({
    name: "Ella",
    email: "Ella@gamil.com",
    role: "employee"
  });
  const frank = new peopleModel({
    name: "Frank",
    email: "Frank@gamil.com",
    role: "employee"
  });
  const gin = new peopleModel({
    name: "Gin",
    email: "Gin@gamil.com",
    role: "employee"
  });
  const harry = new peopleModel({
    name: "Harry",
    email: "Harry@gamil.com",
    role: "employee"
  });
  const iris = new peopleModel({
    name: "Iris",
    email: "Iris@gamil.com",
    role: "employee"
  });
  const jack = new peopleModel({
    name: "Jack",
    email: "Jack@gamil.com",
    role: "employee"
  });

  await amy.save();
  await bob.save();
  await cindy.save();
  await dean.save();
  await ella.save();
  await frank.save();
  await gin.save();
  await harry.save();
  await iris.save();
  await jack.save();

  const queryRes = await peopleModel.find({ name: "cat one" }).exec();
  console.log(queryRes);
})();
