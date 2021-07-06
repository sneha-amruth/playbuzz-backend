const { User } = require('../models/user.model')
const { Quiz } = require('../models/quiz.model')

exports.getUserById = async(req, res, next, id) => {
  try {
    const user = await User.findById(id);
    if(!user){
      return res.status(400).json({ success: false, message: "user does not exist"})
    }
    req.user = user;
    next()
  } catch(err){
    res.status(400).json({success: false, message: "could not retrieve user", error: err.message});
  }
}

exports.getQuizById = async(req, res, next, id) => {
  try {
    const quiz = await Quiz.findById(id);
    if(!quiz){
      return res.status(400).json({ success: false, message: "quiz does not exist"})
    }
    req.quiz = quiz;
    next()
  } catch(err){
    res.status(400).json({success: false, message: "could not retrieve quiz", error: err.message});
  }
}