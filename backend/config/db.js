// Sets up a connection pool to the MySQL database using mysql2/promise
const mysql = require('mysql2/promise');

// Create a connection pool with values from environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST, // e.g. 'localhost' or 'db' (if inside Docker)
  user: process.env.DB_USER, // default 'root'
  password: process.env.DB_PASSWORD, // database password
  database: process.env.DB_NAME, // name of the database (e.g. guestbook)
  waitForConnections: true,
  connectionLimit: 10,  // max number of DB connections
});

module.exports = pool;
