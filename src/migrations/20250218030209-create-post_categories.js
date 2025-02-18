"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("posts_categories", {
      post_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "posts", key: "id" },
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "categories", key: "id" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("posts_categories");
  },
};
