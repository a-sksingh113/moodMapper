const mongoose = require('mongoose');

const communitySchema = mongoose.Schema({
    type: { type: String, required: true, enum: ['Forum', 'Peer Support Group', 'Buddy System'] },
    title: { type: String, required: true },
    description: { type: String, required: true },
    messages: [
        {
            sender: { type: String, required: true },
            content: { type: String, required: true },
            timestamp: { type: Date, default: Date.now },
        },
    ],
});

module.exports = mongoose.model('Community', communitySchema);
