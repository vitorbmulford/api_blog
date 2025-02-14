"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "João Silva",
          email: "joao@email.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Maria Oliveira",
          email: "maria@email.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Carlos Souza",
          email: "carlos@email.com",
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
