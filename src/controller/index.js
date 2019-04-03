const express = require("express");
const yamljs = require("yamljs");
const swaggerUi = require("swagger-ui-express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

const app = express();
const openapiDoc = yamljs.load("./openapi.yaml");
//FORMAT
console.log(JSON.stringify(openapiDoc, null, 2));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiDoc));

app.listen(3000, () => {
  console.log("server starts at port 3000");
});
