const Services = require("./Services");
const dataSouce = require("../models");

class PostServices extends Services {
  constructor() {
    super("Post");
  }
}

module.exports = PostServices;
