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
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber:"Comac C919",
        capacity:300,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber:"Boeing 777X",
        capacity:350,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber:"Airbus A220",
        capacity:400,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber:"Airbus A330neo",
        capacity:320,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber:"Boeing 737 Max 8",
        capacity:250,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber:" Irkut MC-21",
        capacity:370,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ], {})

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
