const express = require("express");
const { Router } = express;
const users = require("./usersRoutes.js");
const posts = require("./postsRoutes.js");
const categories = require("./categoriesRoutes.js");
const comments = require("./commentsRoutes.js");

module.exports = (app) => {
  app.use(express.json(), users, posts, categories, comments);
};
