const express = require('express');
const router = express.Router();
const { createJournal, getJournals, deleteJournal } = require('../controllers/journalController');
const protect = require('../middleware/validateTokenHandler'); // Auth middleware

// Route to create a new journal and get all journals
router.post('/', protect, createJournal); // Create a journal
router.get('/', protect, getJournals);   // Get all journals

// Route to delete a journal by ID
router.delete('/:id', protect, deleteJournal); // Delete a journal by ID

module.exports = router;
