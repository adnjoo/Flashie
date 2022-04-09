const { DataTypes } = require("@sequelize/core");
const { sequelize } = require("./index");

const Card = sequelize.define("card", {
  front: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  back: {
    type: DataTypes.STRING,
  },
  cardset: {
    type: DataTypes.STRING,
  },
  image_url: {
    type: DataTypes.STRING,
  },
});

module.exports = Card;