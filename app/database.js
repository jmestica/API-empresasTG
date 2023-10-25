const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'QRTracker',
  password: "42517239Jj",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
