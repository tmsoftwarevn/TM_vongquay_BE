"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class khach_hang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  khach_hang.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      otp: DataTypes.INTEGER,
      uuid: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "khach_hang",
    }
  );
  return khach_hang;
};
