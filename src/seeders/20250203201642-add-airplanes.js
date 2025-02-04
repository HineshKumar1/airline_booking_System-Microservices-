'use strict';
const {Op} = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airplanes',[
    {
      modelNumber: "345hd",
      capacity: 232,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber: "78ijd",
      capacity: 87,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes', {
      [Op.or] : [{modelNumber: '345hd'}, {modelNumber: '78ijd'}]
    });
  }
};
