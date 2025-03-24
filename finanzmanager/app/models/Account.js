const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  balance: { type: Number, default: 0 },
  iban: { type: String },
  bank: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Account', accountSchema);
