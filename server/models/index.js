const { Sequelize } = require('@sequelize/core');

// local
const sequelize = new Sequelize(
  'flashcard_db',
  'flashcard_dev',
  'flashcard_password',
  {
    define: {
      createdAt: 'createdat',
      updatedAt: 'updatedat',
    },
    host: 'localhost',
    dialect: 'postgres',
  },
);

module.exports = {
  sequelize,
};