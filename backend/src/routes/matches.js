const express = require('express');
const router = express.Router();
const Match = require('../models/Match');
const authenticate = require('../middleware/authenticate');

// Create new match
router.post('/', authenticate, async (req, res) => {
  try {
    const match = new Match({
      ...req.body,
      createdBy: req.user._id
    });
    await match.save();
    res.status(201).json(match);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get match by ID
router.get('/:id', authenticate, async (req, res) => {
  try {
    const match = await Match.findById(req.params.id)
      .populate('team1 team2 players');
    if (!match) {
      return res.status(404).json({ error: 'Match not found' });
    }
    res.json(match);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update match
router.put('/:id', authenticate, async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);
    if (!match) {
      return res.status(404).json({ error: 'Match not found' });
    }

    Object.assign(match, req.body);
    await match.save();
    res.json(match);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get user's matches
router.get('/user', authenticate, async (req, res) => {
  try {
    const matches = await Match.find({ createdBy: req.user._id })
      .populate('team1 team2')
      .sort('-createdAt');
    res.json(matches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
