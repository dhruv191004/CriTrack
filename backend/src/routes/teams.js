const express = require('express');
const router = express.Router();
const Team = require('../models/Team');
const authenticate = require('../middleware/authenticate');

// Create new team
router.post('/', authenticate, async (req, res) => {
  try {
    const team = new Team({
      ...req.body,
      createdBy: req.user._id
    });
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all teams for user
router.get('/', authenticate, async (req, res) => {
  try {
    const teams = await Team.find({ createdBy: req.user._id })
      .populate('players');
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get team by ID
router.get('/:id', authenticate, async (req, res) => {
  try {
    const team = await Team.findById(req.params.id)
      .populate('players');
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update team
router.put('/:id', authenticate, async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    Object.assign(team, req.body);
    await team.save();
    res.json(team);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete team
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    await team.remove();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
