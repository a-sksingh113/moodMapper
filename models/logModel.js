const mongoose = require('mongoose');

const logSchema = mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        mood: { type: String, enum: ['Happy', 'Sad', 'Neutral', 'Anxious', 'Angry'], required: true },
        energyLevel: { type: Number, min: 1, max: 10, required: true },
        notes: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Log', logSchema);
