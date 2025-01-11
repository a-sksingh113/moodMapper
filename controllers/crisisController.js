const Crisis = require('../models/crisisModel');

const getHelplines = async (req, res) => {
  try {
    const helplines = await Crisis.find({ type: 'helpline' });
    res.status(200).json({ success: true, data: helplines });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

const sendPanicAlert = (req, res) => {
  const { userId, location } = req.body;
  if (!userId || !location) {
    return res.status(400).json({ success: false, message: 'User ID and location are required' });
  }
  // Simulate sending a panic alert
  res.status(200).json({ success: true, message: 'Panic alert sent successfully' });
};

const groundingExercises = async (req, res) => {
  try {
    const exercises = await Crisis.find({ type: 'exercise' });
    res.status(200).json({ success: true, data: exercises });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = { getHelplines, sendPanicAlert, groundingExercises };