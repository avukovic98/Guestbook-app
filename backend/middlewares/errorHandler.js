//This is a middleware function for handling errors in an Express.js app. It catches errors passed via next(err) and sends a response to the client.
module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
};
