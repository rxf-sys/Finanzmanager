const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Alle Transaktionen holen
router.get('/', async (req, res) => {
  const transactions = await Transaction.find().populate('account');
  res.json(transactions);
});

// Transaktion erstellen
router.post('/', async (req, res) => {
  const newTransaction = new Transaction(req.body);
  await newTransaction.save();
  res.json(newTransaction);
});

// Einzelne Transaktion holen
router.get('/:id', async (req, res) => {
  const transaction = await Transaction.findById(req.params.id).populate('account');
  res.json(transaction);
});

// Transaktion löschen
router.delete('/:id', async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ message: 'Transaktion gelöscht' });
});

module.exports = router;
