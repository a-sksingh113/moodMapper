const express = require('express');
const router = express.Router();
const { createLog, getLogs } = require('../controllers/logController');
const protect = require('../middleware/validateTokenHandler');

// Route to create a new log
router.post('/', protect, createLog);

// Route to get all logs
router.get('/', protect, getLogs);

module.exports = router;
