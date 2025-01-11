const Resource = require('../models/resourcesModel');

// Fetch all resources or filter by type
const getResources = async (req, res) => {
    const { type } = req.query;

    try {
        const query = type ? { type } : {};
        const resources = await Resource.find(query);
        res.json(resources);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Add a new resource (admin-only functionality)
const addResource = async (req, res) => {
    const { type, title, content, link } = req.body;

    try {
        const resource = await Resource.create({ type, title, content, link });
        res.status(201).json(resource);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getResources, addResource };
