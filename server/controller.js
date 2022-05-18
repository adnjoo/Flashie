const { Pool } = require('pg');
const router = require('express').Router();
require('dotenv').config();

// local use
const { host, user, database, password, port } = require('./config');

const pool = new Pool({
  host,
  user,
  database,
  password,
  port,
});

// deployment
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

const test = (req, res) => {
  res.status(200).send('Testing Flashie API');
};

module.exports = {
  test,
};
