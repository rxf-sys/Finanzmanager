const express = require('express');
const router = express.Router();
const Account = require('../models/Account');

// Alle Konten holen
router.get('/', async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
});

// Konto erstellen
router.post('/', async (req, res) => {
  const newAccount = new Account(req.body);
  await newAccount.save();
  res.json(newAccount);
});

// Einzelnes Konto holen
router.get('/:id', async (req, res) => {
  const account = await Account.findById(req.params.id);
  res.json(account);
});

// Konto aktualisieren
router.put('/:id', async (req, res) => {
  const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedAccount);
});

// Konto löschen
router.delete('/:id', async (req, res) => {
  await Account.findByIdAndDelete(req.params.id);
  res.json({ message: 'Konto gelöscht' });
});

module.exports = router;
