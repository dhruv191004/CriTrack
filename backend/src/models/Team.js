const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  shortName: {
    type: String,
    required: true
  },
  logo: String,
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  }],
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  },
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
