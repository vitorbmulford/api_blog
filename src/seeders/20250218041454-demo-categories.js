"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name_category: "Tecnologia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_category: "Esportes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_category: "Entretenimento",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
