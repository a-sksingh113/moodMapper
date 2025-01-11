const Tips = require('../models/tipsModel');

// Fetch tips based on a category
const getTips = async (req, res) => {
    const { category } = req.query;

    try {
        const query = category ? { category } : {};
        const tips = await Tips.find(query);
        res.json(tips);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getTips };
