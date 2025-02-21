"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PostCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PostCategory.belongsTo(models.Post, {
        foreignKey: "post_id",
      });
      PostCategory.belongsTo(models.Category, {
        foreignKey: "category_id",
      });
    }
  }

  PostCategory.init(
    {
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "posts", 
          key: "id", 
        },
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "categories", 
          key: "id", 
        },
      },
    },
    {
      sequelize,
      modelName: "PostCategory",
      tableName: "posts_categories", 
      timestamps: true, 
    }
  );

  return PostCategory;
};
