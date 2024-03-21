"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("image", {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nut_quay: {
        type: Sequelize.STRING,
      },
      mui_ten: {
        type: Sequelize.STRING,
      },
      vong_quay: {
        type: Sequelize.STRING,
      },
      banner: {
        type: Sequelize.STRING,
      },
      anh_nen: {
        type: Sequelize.STRING,
      },
      footer: {
        type: Sequelize.STRING,
      },
      so_manh: {
        type: Sequelize.INTEGER,
      },
      id_game:{
        type: Sequelize.INTEGER,
      }, 
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // defaultValue: Sequelize.fn("now"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("image");
  },
};
