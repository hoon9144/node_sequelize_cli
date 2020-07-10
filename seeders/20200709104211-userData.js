'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
 
      return queryInterface.bulkInsert('User2s', [
        {
        userId: 'user1',
        name:"kim",
        engName:"suyeon",
        createdAt:"2020-07-09",
        updatedAt:"2020-07-09"
      },
      {
        userId: 'user2',
        name:"lee",
        engName:"zuyeon",
        createdAt:"2020-07-09",
        updatedAt:"2020-07-09"
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});

  }
};
