const dataSouce = require("../models");

class Services {
  constructor(nameOfModel) {
    this.model = nameOfModel;
  }
  async getAllRegisters() {
    return dataSouce[this.model].findAll();
  }
}

module.exports = Services;
