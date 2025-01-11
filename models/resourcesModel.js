const mongoose = require('mongoose');

const resourceSchema = mongoose.Schema({
    type: { type: String, required: true, enum: ['Article', 'Guided Meditation', 'Breathing Exercise', 'CBT Technique'] },
    title: { type: String, required: true },
    content: { type: String, required: true },
    link: { type: String }, // Optional for external links
});

module.exports = mongoose.model('Resource', resourceSchema);
