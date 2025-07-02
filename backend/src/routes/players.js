const express = require('express');
const router = express.Router();
const Player = require('../models/Player');
const authenticate = require('../middleware/authenticate');

// Create new player
router.post('/', authenticate, async (req, res) => {
  try {
    const player = new Player({
      ...req.body,
      createdBy: req.user._id
    });
    await player.save();
    res.status(201).json(player);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all players for user
router.get('/', authenticate, async (req, res) => {
  try {
    const players = await Player.find({ createdBy: req.user._id });
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get player by ID
router.get('/:id', authenticate, async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    res.json(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update player
router.put('/:id', authenticate, async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }

    Object.assign(player, req.body);
    await player.save();
    res.json(player);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete player
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }

    await player.remove();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
