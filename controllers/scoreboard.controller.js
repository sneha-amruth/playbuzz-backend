const { extend } = require("lodash");
const mongoose = require('mongoose')
const { User } = require('../models/user.model')
const { Scoreboard } = require("../models/scoreboard.model")

exports.saveUserScoreboard = async(req, res) => {
  try {
    const { user } = req
    const { category, score, attempts } = req.body
    const existingQuiz = await Scoreboard.findOne({ userId: user._id, category: category });

   if(existingQuiz === null) {
     const NewScore = new Scoreboard({ userId: user._id, category, score, attempts});
     const savedScore = NewScore.save()
      res.json({ success: true, data: savedScore })
   } else {
     let updateScore = {...existingQuiz, score, attempts};
     let saveUpdatedScore = extend(existingQuiz, updateScore);
     await saveUpdatedScore.save();
     res.json({ success: true, data: saveUpdatedScore });
   }
  } catch(err) {
    res.status(500).json({ success: false, message: "unable to save user's scoreboard", errorMessage: err.message })
  }
}

exports.getUserScoreboard = async(req, res) => {
  try {
    const { user } = req
    const usersScore = await Scoreboard.find({userId: user._id})
    res.json({ success: true, data: usersScore });
  } catch(err) {
     res.status(500).json({ success: false, message: "unable to fetch user's scoreboard", errorMessage: err.message })
  }
}

exports.getLeaderboard = async(req, res) => {
  try {
    let leaderboard  = await Scoreboard.find({}).sort({ score: -1 }).limit(5).populate({ path: 'userId', select: 'firstName' })
    
    leaderboard = leaderboard.map(item => ({
       firstName: item.userId.firstName,
       category: item.category,
       score: item.score,
       attempts: item.attempts
    }))
    res.json({ success: true, data: leaderboard })
  } catch(err) {
    res.status(500).json({ success: false, message: "unable to fetch leaderboard", errorMessage: err.message })
  }
}
