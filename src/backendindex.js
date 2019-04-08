const express = require("express");
const yamljs = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/insight");

const router = require("./router");

const app = express();

const openapiDoc = yamljs.load("./openapi.yaml");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiDoc));
app.use(bodyParser.json());
app.use(router);

app.listen(3008, () => {
  console.log("Server starts at PORT: 3008");
});
