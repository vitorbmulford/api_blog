class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }
  // No método getAll do seu Controller
  async getAll(req, res) {
    try {
      const listOfRecord = await this.entityService.getAllRecords();
      return res.status(200).json(listOfRecord);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar registros", error: error.message });
    }
  }

  async takeOneById(req, res) {
    const { id } = req.params;
    try {
      const oneRecord = await this.entityService.getRecordById(Number(id));
      if (!oneRecord) {
        return res.status(404).json({ message: "Registro não encontrado" });
      }
      return res.status(200).json(oneRecord);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar o registro", error: error.message });
    }
  }
  async createNew(req, res) {
    const dataForCreate = req.body;
    try {
      const createdRecord = await this.entityService.createRecord(
        dataForCreate
      );
      return res.status(201).json(createdRecord);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao criar o post", error: error.message });
    }
  }
  async update(req, res) {
    const { id } = req.params;
    const dataUdated = req.body;
    try {
      const post = await this.entityService.getRecordById(Number(id));
      if (!post) {
        return res.status(404).json({ message: "Post não encontrado" });
      }
      const isUpdated = await this.entityService.updateRecord(
        dataUdated,
        Number(id)
      );
      if (!isUpdated) {
        return res.status(400).json({ mensagem: "Falha na atualização" });
      }
      return res.status(200).json({ mensagem: "Atualizado com sucesso" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao atualizar", error: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.entityService.deleteRecord(Number(id));

      return res.status(200).json({ mensagem: `id ${id} deleted` });
    } catch (error) {
      console.error("Erro ao deletar o registro:", error);
      return res
        .status(500)
        .json({ mensagem: "Erro ao deletar o registro", error: error.message });
    }
  }
}

module.exports = Controller;
