const express = require('express');
const router = express.Router();
const { getUserProgress, logProgress } = require('../controllers/progressController');

// @route   GET /api/progress/:userId
// @desc    Get all progress for a user
// @access  Private
router.get('/:userId', getUserProgress);

// @route   POST /api/progress
// @desc    Log a new progress entry
// @access  Private
router.post('/', logProgress);

module.exports = router;