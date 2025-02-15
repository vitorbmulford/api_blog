const database = require("../models");

class UserController {
  static async getAll(req, res) {
    try {
      const listOfUsers = await database.User.findAll();
      return res.status(200).json(listOfUsers);
    } catch (error) {
      
    }
  }
}
module.exports = UserController;
