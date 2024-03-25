"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  image.init(
    {
      nut_quay: DataTypes.STRING,
      mui_ten: DataTypes.STRING,
      vong_quay: DataTypes.STRING,
      banner: DataTypes.STRING,
      anh_nen: DataTypes.STRING,
      footer: DataTypes.STRING,
      id_game: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "image",
    }
  );
  return image;
};
