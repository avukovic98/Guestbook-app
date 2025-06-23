
// Gets the info about the database parameters
const db = require('../config/db');

//Used for inserting data into the database with the SQL query
exports.insertMessage = (message, name) => {
  return db.query(
    'INSERT INTO messages (message, name, created_at) VALUES (?, ?, NOW())',
    [message, name]
  );
};

//Used for fetching data from the database with the SQL query 
exports.fetchMessages = (limit, offset) => {
  return db.query(
    'SELECT message, name, created_at FROM messages ORDER BY created_at DESC LIMIT ? OFFSET ?',
    [limit, offset]
  );
};
