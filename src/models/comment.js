"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      Comment.belongsTo(models.Post, {
        foreignKey: "post_id",
      });
    }
  }
  Comment.init(
    {
      comment_content: DataTypes.STRING,
      post_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
      tableName: "comments",
    }
  );
  return Comment;
};
