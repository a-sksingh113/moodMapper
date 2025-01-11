const mongoose = require('mongoose');

const CrisisSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['helpline', 'exercise']
  },
  country: {
    type: String,
    required: function () { return this.type === 'helpline'; }
  },
  number: {
    type: String,
    required: function () { return this.type === 'helpline'; }
  },
  service: {
    type: String,
    required: function () { return this.type === 'helpline'; }
  },
  description: {
    type: String,
    required: function () { return this.type === 'exercise'; }
  }
}, { timestamps: true });

module.exports = mongoose.model('Crisis', CrisisSchema);
