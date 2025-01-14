const Progress = require('../models/progressModel');

// Get all progress for a user
const getUserProgress = async (req, res) => {
  const { userId } = req.params;
  try {
    const progress = await Progress.find({ user: userId });
    res.status(200).json({ success: true, data: progress });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// Log new progress
const logProgress = async (req, res) => {
  const { user, type, details } = req.body;
  if (!user || !type || !details) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  try {
    const progress = await Progress.create({ user, type, details });
    res.status(201).json({ success: true, data: progress });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = { getUserProgress, logProgress };
