const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['batsman', 'bowler', 'all-rounder', 'wicketkeeper'],
    required: true
  },
  battingStyle: {
    type: String,
    enum: ['right-handed', 'left-handed'],
    required: true
  },
  bowlingStyle: {
    type: String,
    enum: ['right-arm', 'left-arm', 'leg-spin', 'off-spin', 'left-arm-spin'],
    default: ''
  },
  battingStats: {
    matches: { type: Number, default: 0 },
    runs: { type: Number, default: 0 },
    average: { type: Number, default: 0 },
    highestScore: { type: Number, default: 0 },
    fifties: { type: Number, default: 0 },
    hundreds: { type: Number, default: 0 },
    strikeRate: { type: Number, default: 0 }
  },
  bowlingStats: {
    matches: { type: Number, default: 0 },
    wickets: { type: Number, default: 0 },
    average: { type: Number, default: 0 },
    bestFigures: { type: String, default: '' },
    economy: { type: Number, default: 0 }
  },
  teams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
