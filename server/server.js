const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const cards = require("./routes/cards");

const controller = require("./controller.js");

const port = process.env.PORT || 4001;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", controller.test);
app.get('/getcards', cards.getCards);
app.post('/createcard', cards.createCard);

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});