// Initializes the Express app, middlewares, and routes
const express = require('express');
const cors = require('cors');
const messageRoutes = require('./routes/message.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Register the message-related routes under /api/messages
app.use('/api/messages', messageRoutes);

//Customizable error handler that i personally added 
app.use(errorHandler);

module.exports = app;
