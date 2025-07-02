const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  format: {
    type: String,
    enum: ['T20', 'ODI', 'Test'],
    required: true
  },
  team1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  },
  team2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  },
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  }],
  currentInning: {
    type: Number,
    default: 1
  },
  currentBatsman: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  },
  currentBowler: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  },
  score: {
    team1: {
      runs: { type: Number, default: 0 },
      wickets: { type: Number, default: 0 },
      overs: { type: Number, default: 0 },
      extras: { type: Number, default: 0 }
    },
    team2: {
      runs: { type: Number, default: 0 },
      wickets: { type: Number, default: 0 },
      overs: { type: Number, default: 0 },
      extras: { type: Number, default: 0 }
    }
  },
  battingOrder: [{
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
    },
    players: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Player'
    }]
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['upcoming', 'in_progress', 'completed'],
    default: 'upcoming'
  }
});

const Match = mongoose.model('Match', matchSchema);
module.exports = Match;
