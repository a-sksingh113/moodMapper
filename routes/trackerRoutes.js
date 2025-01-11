const express = require('express');
const { createTracker, getTrackers } = require('../controllers/trackerController');
const protect = require('../middleware/validateTokenHandler');
const router = express.Router();

// Create a new tracker
router.post('/', protect, createTracker);

// Get all trackers
router.get('/', protect, getTrackers);

module.exports = router;
