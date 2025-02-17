class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }
  async getAll(req, res) {
    try {
      const listOfRecord = await this.entityService.getAllRecords();
      return res.status(200).json(listOfRecord);
    } catch (error) {}
  }
  async takeOneById(req, res) {
    const { id } = req.params;
    try {
      const oneRecord = await this.entityService.getRecordById(Number(id));
      return res.status(200).json(oneRecord);
    } catch (error) {}
  }
  async createNew(req, res) {
    try {
      const dataForCreate = await this.entityService.createRecord();
      return res.status(200).json(dataForCreate);
    } catch (error) {}
  }
  async uptade(req, res) {
    const { id } = req.params;
    const dataUdated = req.body;
    try {
      const isUpdated = await this.entityService.updateRecord(
        dataUdated,
        Number(id)
      );
      if (!isUpdated) {
        return res.status(400).json({ mensagem: "Register not found" });
      }
      return res.status(200).json({ mensagem: "updated successfully" });
    } catch (error) {}
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.entityService.deleteRecord(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deleted` });
    } catch (error) {}
  }
}

module.exports = Controller;
