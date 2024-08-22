'use strict';

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

    await queryInterface.bulkInsert("Airports",[
      {
        name:"Indira Gandhi International Airport",
        cityId:16,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Dehradun Airport",
        cityId:16,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Kempegowda International Airport",
        cityId:21,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Mangalore Airport",
        cityId:21,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Huballi Airport",
        cityId:21,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Mysore Airport",
        cityId:21,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
