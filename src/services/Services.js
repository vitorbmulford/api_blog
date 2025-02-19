const { where } = require("sequelize");
const dataSouce = require("../models");
const { Comment, Post } = require("../models");
const { User } = require("../models");
const { Category } = require("../models");

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
    try {
      console.log(`Tentando deletar a categoria com ID: ${id}`);

      // Remover os comentários associados à categoria, caso existam
      await Comment.destroy({
        where: { category_id: id }, // Supondo que 'category_id' seja o relacionamento com 'Category'
      });

      // Agora, tentamos remover a categoria
      const result = await Category.destroy({
        where: { id }, // Usando 'Category' para deletar, não 'User'
      });

      if (result === 0) {
        throw new Error("Categoria não encontrada.");
      }

      console.log(`Categoria com ID ${id} deletada com sucesso.`);
      return result;
    } catch (error) {
      console.error(`Erro ao deletar a categoria: ${error.message}`);
      throw new Error(`Erro ao deletar o registro: ${error.message}`);
    }
  }
}

module.exports = Services;
