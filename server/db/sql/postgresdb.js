const { Pool, Client } = require('pg');
const connectionString = 'postgres://kuqulfti:83huXsdcUP0WYkIF5glvtYx2V7yJnXF6@raja.db.elephantsql.com:5432/kuqulfti';
const pool = new Pool({connectionString: connectionString});

pool.query('CREATE TABLE IF NOT EXISTS users (_id SERIAL PRIMARY KEY, firstName VARCHAR, lastName VARCHAR, email VARCHAR, password VARCHAR)', (err, res) => {
    console.log(err, res)
  });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
};