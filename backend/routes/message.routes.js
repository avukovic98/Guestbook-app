
// Defines Express routes for the guestbook messages
const express = require('express');
const router = express.Router();
const { postMessage, getMessages } = require('../controllers/message.controller');

// POST /api/messages - save a new guestbook message
router.post('/', postMessage);

// GET /api/messages?page=n - retrieve a paginated list of messages
router.get('/', getMessages);

module.exports = router;
