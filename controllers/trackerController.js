const Tracker = require('../models/trackerModel');

// Create a tracker entry
const createTracker = async (req, res) => {
    const { sleepHours, physicalActivityMinutes, waterIntakeLiters, foodLog } = req.body;

    try {
        const tracker = await Tracker.create({
            user: req.user.id,
            sleepHours,
            physicalActivityMinutes,
            waterIntakeLiters,
            foodLog,
        });
        res.status(201).json(tracker);
    } catch (error) {
        res.status(400);
        throw error;
    }
};

// Get all tracker entries for the logged-in user
const getTrackers = async (req, res) => {
    try {
        const trackers = await Tracker.find({ user: req.user.id });
        res.json(trackers);
    } catch (error) {
        res.status(400);
        throw error;
    }
};

module.exports = { createTracker, getTrackers };
