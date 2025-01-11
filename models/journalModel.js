const mongoose = require('mongoose');

const journalSchema = mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        title: { type: String, required: true },
        content: { type: String, required: true },
        mood: { type: String, enum: ['Happy', 'Sad', 'Neutral', 'Anxious', 'Angry'], required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Journal', journalSchema);
