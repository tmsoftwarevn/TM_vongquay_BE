"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bao_cao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bao_cao.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      qua: DataTypes.STRING,
      id_game: DataTypes.INTEGER,
      active: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "bao_cao",
    }
  );
  return bao_cao;
};
