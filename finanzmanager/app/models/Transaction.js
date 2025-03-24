const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  category: { type: String },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
