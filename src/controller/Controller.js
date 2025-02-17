class Constroller {
  constructor(entityService) {
    this.entityService = entityService;
  }
  async getAll(req, res) {
    try {
      const listOfRegisters = await this.entityService.getAllRegisters();
      return res.status(200).json(listOfRegisters);
    } catch (error) {}
  }
}

module.exports = Constroller;
