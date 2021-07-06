const mongoose = require('mongoose')


const OptionsSchema = new mongoose.Schema({

  text: {
    type: String,
    required: "Please enter option"
  },
  isRight: {
    type: Boolean,
    required: "Please enter if the options is true or false"
  }

})

const QuestionSchema = new mongoose.Schema({

  question: {
    type: String,
    required: "Please enter question"
  },
  points: {
    type: Number,
    default: 2,
    required: "Please enter points"
  },
  options: [OptionsSchema]
 
})

const QuizSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['brands', 'skincare', 'science']
  },
  image: {
    type: String,
    required: "Please provide image url"
  },
  description: {
    type: String,
    required: "Please enter description for this quiz"
  },
  questionsList: [QuestionSchema]

}, { timestamps: true })

const Quiz = mongoose.model("Quiz", QuizSchema)
module.exports = { Quiz }
