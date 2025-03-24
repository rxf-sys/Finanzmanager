const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');

// Alle Ziele holen
router.get('/', async (req, res) => {
  const goals = await Goal.find();
  res.json(goals);
});

// Ziel erstellen
router.post('/', async (req, res) => {
  const newGoal = new Goal(req.body);
  await newGoal.save();
  res.json(newGoal);
});

// Ziel aktualisieren
router.put('/:id', async (req, res) => {
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedGoal);
});

// Ziel löschen
router.delete('/:id', async (req, res) => {
  await Goal.findByIdAndDelete(req.params.id);
  res.json({ message: 'Ziel gelöscht' });
});

module.exports = router;
