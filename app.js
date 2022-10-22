const express = require("express");
const routes = require("./src/routes/v3");
const config = require("./config/config");
const app = express();

if (config.env !== "test") {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// parse json request body
app.use(express.json());

// Reroute all API request starting with "/v3" route
app.use("/v3", routes);

module.exports = app;
