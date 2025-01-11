const express = require('express');
const router = express.Router();
const { getHelplines, sendPanicAlert, groundingExercises } = require('../controllers/crisisController');

// @route   GET /api/crisis/helplines
// @desc    Get a list of emergency helplines
// @access  Public
router.get('/helplines', getHelplines);

// @route   POST /api/crisis/panic-alert
// @desc    Send a panic alert to emergency contacts
// @access  Private
router.post('/panic-alert', sendPanicAlert);

// @route   GET /api/crisis/grounding-exercises
// @desc    Get a list of grounding exercises for acute stress
// @access  Public
router.get('/grounding-exercises', groundingExercises);

module.exports = router;
