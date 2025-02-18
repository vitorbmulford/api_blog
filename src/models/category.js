"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Uma categoria pode ter muitos posts (muitos-para-muitos)
      Category.belongsToMany(models.Post, {
        through: "PostCategory", // Tabela de junção
        foreignKey: "category_id",
      });
    }
  }
  Category.init(
    {
      name_category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "categories",
    }
  );
  return Category;
};
