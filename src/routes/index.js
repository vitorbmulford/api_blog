const express = require("express");
const { Router } = express;
const users = require("./usersRoutes.js");

module.exports = (app) => {
  app.use(express.json(), users);
};
