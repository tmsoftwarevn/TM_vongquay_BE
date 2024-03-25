"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  game.init(
    {
      name: DataTypes.STRING,
      id_Khachhang: DataTypes.INTEGER,
      slug: DataTypes.STRING,
      so_manh: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "game",
    }
  );
  return game;
};
