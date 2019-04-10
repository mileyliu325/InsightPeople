const Router = require("express").Router;
const router = Router();

router.get("/", (req, res, next) => {
  res.redirect("/docs");
});

const personGet = require("./controller/people/single/get");
const personCreate = require("./controller/people/single/create");
const personUpdate = require("./controller/people/single/update");
const personDelete = require("./controller/people/single/delete");

// single person restful apis
router.get("/people/:id", personGet);
router.post("/people", personCreate);
router.put("/people/:id", personUpdate);
router.delete("/people/:id", personDelete);

const peopleBulkGet = require("./controller/people/bulk/get");
const peopleList = require("./controller/people/bulk/getall");

// bulk people restful apis
router.get("/bulk/people/:ids", peopleBulkGet);
//all people
router.get("/bulk/people", peopleList);

const taskGet = require("./controller/tasks/single/get");
const taskCreate = require("./controller/tasks/single/create");
const taskUpdate = require("./controller/tasks/single/update");
const taskDelete = require("./controller/tasks/single/delete");

// single task restful apis
router.get("/task/:id", taskGet);
router.post("/task", taskCreate);
router.put("/task/:id", taskUpdate);
router.delete("/task/:id", taskDelete);

const tasksBulkGet = require("./controller/tasks/bulk/get");

// bulk tasks restful apis
router.get("/bulk/task/:ids", tasksBulkGet);

module.exports = router;
