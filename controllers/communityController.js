const Community = require('../models/communityModel');

// Fetch all communities
const getCommunities = async (req, res) => {
    try {
        const communities = await Community.find();
        res.json(communities);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Create a new community (admin functionality)
const createCommunity = async (req, res) => {
    const { type, title, description } = req.body;

    try {
        const community = await Community.create({ type, title, description, messages: [] });
        res.status(201).json(community);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Post a message to a community
const postMessage = async (req, res) => {
    const { id } = req.params;
    const { sender, content } = req.body;

    try {
        const community = await Community.findById(id);

        if (!community) {
            return res.status(404).json({ message: 'Community not found' });
        }

        community.messages.push({ sender, content });
        await community.save();

        res.status(201).json({ message: 'Message added', community });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getCommunities, createCommunity, postMessage };
