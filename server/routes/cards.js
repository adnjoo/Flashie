const Card = require("../models/Card");

exports.getCards = async (req, res) => {
  try {
    const cards = await Card.findAll({ raw: true });
    res.status(200).send(cards);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

exports.createCard = async (req, res) => {
  const { front, back, cardSet } = req.body;
  try {
    const card = await Card.create({
      front,
      back,
      cardset: cardSet,
      image_url: null,
    });
    return res.status(201).json(card);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
