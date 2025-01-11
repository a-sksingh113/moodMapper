const mongoose = require('mongoose');

const trackerSchema = mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        sleepHours: { type: Number, required: true },
        physicalActivityMinutes: { type: Number, required: true },
        waterIntakeLiters: { type: Number, required: true },
        foodLog: { type: [String], required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Tracker', trackerSchema);
