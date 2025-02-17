const { where } = require("sequelize");
const dataSouce = require("../models");

class Services {
  constructor(nameOfModel) {
    this.model = nameOfModel;
  }
  async getAllRecords() {
    return dataSouce[this.model].findAll();
  }
  async getRecordById(id) {
    return dataSouce[this.model].findByPk(id);
  }
  async createRecord(dataOfRecord) {
    return dataSouce[this.model].create(dataOfRecord);
  }

  async updateRecord(dataUptade, id) {
    const listOfRecordsUptaed = dataSouce[this.model].update(dataUptade, {
      where: { id: id },
    });
    if (listOfRecordsUptaed[0] === 0) {
      return false;
    }
    return true;
  }
  async deleteRecord(id) {
    return dataSouce[this.model].destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = Services;
