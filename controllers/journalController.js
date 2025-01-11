const Journal = require('../models/journalModel');

// Create a journal entry
const createJournal = async (req, res) => {
    const { title, content, mood } = req.body;

    try {
        const journal = await Journal.create({
            user: req.user.id,
            title,
            content,
            mood,
        });
        res.status(201).json(journal);
    } catch (error) {
        res.status(400);
        throw error;
    }
};

// Get all journal entries for the logged-in user
const getJournals = async (req, res) => {
    try {
        const journals = await Journal.find({ user: req.user.id });
        res.json(journals);
    } catch (error) {
        res.status(400);
        throw error;
    }
};

// Delete a journal entry
const deleteJournal = async (req, res) => {
    try {
        const journal = await Journal.findById(req.params.id);
        if (!journal || journal.user.toString() !== req.user.id) {
            res.status(404);
            throw new Error('Journal not found');
        }

        await journal.remove();
        res.json({ message: 'Journal removed' });
    } catch (error) {
        res.status(400);
        throw error;
    }
};

module.exports = { createJournal, getJournals, deleteJournal };
