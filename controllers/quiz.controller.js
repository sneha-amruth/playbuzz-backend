const mongoose = require('mongoose')
const { User } = require('../models/user.model')
const { Quiz } = require('../models/quiz.model')

 exports.getAllQuizes = async(req, res) => {  
    try {
      const allQuizes = await Quiz.find({})
      res.json({success: true, data: allQuizes})
    } catch(err) {
      res.status(500).json({success: false, message: "unable to fetch all quizes", errMessage: err.message })
    }
}

exports.createQuiz = async(req, res) => {
  try {
    const { category, questionsList } = req.body
    const uid = new mongoose.Types.ObjectId();
    const NewQuiz = new Quiz({
      _id: uid,
      category,
      questionsList,
    }) 
    let savedQuiz = await NewQuiz.save()
    savedQuiz = await savedQuiz.populate('questionsList.question questionsList.points questionsList.options.text questionsList.options.isRight').execPopulate();
    res.json({success: true, data: savedQuiz})
  } catch(err) {
    res.status(500).json({ success: false, message: "unable to create quiz", errorMessage: err.message })
  }
}