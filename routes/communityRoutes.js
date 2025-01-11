const express = require('express');
const router = express.Router();
const { getCommunities, postMessage, createCommunity } = require('../controllers/communityController');

// Public Routes
router.get('/', getCommunities); // Fetch all communities
router.post('/:id/messages', postMessage); // Post a message to a specific community

// Admin Routes
router.post('/', createCommunity); // Create a new community

module.exports = router;
