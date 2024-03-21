"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class phan_qua extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  phan_qua.init(
    {
      name: DataTypes.STRING,
      tile: DataTypes.INTEGER,
      id_game: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "phan_qua",
    }
  );
  return phan_qua;
};
