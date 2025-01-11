const mongoose = require('mongoose');

const tipsSchema = mongoose.Schema({
    category: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
});

module.exports = mongoose.model('Tips', tipsSchema);
