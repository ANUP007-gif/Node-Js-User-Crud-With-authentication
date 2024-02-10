'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      designation: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null,
      },
      first_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      country_code: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        unique: true,
      },
     
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    
      role: {
        type: Sequelize.ENUM('admin', 'user'),
        defaultValue: 'user',
        allowNull: false,
      },
     
      address: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      pincode: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      country_name: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
     
      active_status: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1,
      },
     
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
