const { where } = require("sequelize");
const dataSouce = require("../models");
class Services {
  constructor(nameOfModel) {
    this.model = nameOfModel;
  }

  async getAllRecords() {
    const records = await dataSouce[this.model].findAll();
    return records.map((record) => record.toJSON()); 
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

  // Método deleteRecord "cru"
  async deleteRecord(id) {
    try {
      const result = await dataSouce[this.model].destroy({
        where: { id },
      });

      if (result === 0) {
        throw new Error(`${this.model} não encontrado.`);
      }

      console.log(`${this.model} com ID ${id} deletado com sucesso.`);
      return result;
    } catch (error) {
      console.error(`Erro ao deletar o registro: ${error.message}`);
      throw new Error(`Erro ao deletar o registro: ${error.message}`);
    }
  }
}

module.exports = Services;
