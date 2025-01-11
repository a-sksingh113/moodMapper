const Log = require('../models/logModel');

// Create a daily log
const createLog = async (req, res) => {
    const { mood, energyLevel, notes } = req.body;

    try {
        const log = await Log.create({
            user: req.user.id,
            mood,
            energyLevel,
            notes,
        });
        res.status(201).json(log);
    } catch (error) {
        res.status(400);
        throw error;
    }
};

// Get all daily logs for the logged-in user
const getLogs = async (req, res) => {
    try {
        const logs = await Log.find({ user: req.user.id });
        res.json(logs);
    } catch (error) {
        res.status(400);
        throw error;
    }
};

module.exports = { createLog, getLogs };
