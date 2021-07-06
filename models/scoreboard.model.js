const mongoose = require('mongoose')

const ScoreboardSchema = new mongoose.Schema({
   userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  category: {
    type: String,
    enum: ['brands', 'skincare', 'science']
  },
  score: {
    type: Number,
  },
  attempts: {
    type: Number
  }

}, { timestamps: true })

const Scoreboard = mongoose.model('Scoreboard', ScoreboardSchema);

module.exports = { Scoreboard }