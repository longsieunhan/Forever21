"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("rooms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameRoom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      blog: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imageRoom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      states: {
        type: Sequelize.ENUM("unBooked", "Booked"),
        allowNull: false,
      },
      nameCustomer: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phoneCustomer: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      timeRental: {
        type: Sequelize.INTEGER,
        allowNull: true,  
      },
      totalMoney: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal("CURRENT(3)"),
      },
      updated_at: {
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal("CURRENT(3) ON UPDATE CURRENT(3)"),
      },
    }).then(() => {
      return queryInterface.addIndex("rooms", ["id"])
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("rooms");
  },
};