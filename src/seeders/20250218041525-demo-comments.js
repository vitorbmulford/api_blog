"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          user_id: 2, // Maria Oliveira
          post_id: 1, // O Futuro da IA
          comment_content: "Muito interessante! A IA vai mudar tudo.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // Carlos Souza
          post_id: 2, // Copa do Mundo 2026
          comment_content: "Torcendo para o Brasil ganhar!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1, // João Silva
          post_id: 3, // Filmes de 2025
          comment_content: "Quais filmes vocês estão esperando?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
