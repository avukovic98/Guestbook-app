// Controller logic for handling guestbook messages
const Message = require('../models/message.model');

// Handles POST request to create a new message
exports.postMessage = async (req, res, next) => {
  const { message, name } = req.body;

  // Simple validation 
  if (!message || !name || message.length > 500 || name.length > 100) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  try {
	  // Insert the message into the database with current timestamp
    await Message.insertMessage(message, name);
    res.status(201).json({ status: 'success' });
  } catch (error) {
    next(error);
  }
};

// Handles GET request to retrieve messages (paginated)
exports.getMessages = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1; // default to page 1
  const limit = 10;                           // max 10 messages per page
  const offset = (page - 1) * limit;

  try {
// Retrieve the latest messages with limit and offset for pagination
    const [rows] = await Message.fetchMessages(limit, offset);
    res.json(rows);
  } catch (error) {
    next(error);
  }
};
