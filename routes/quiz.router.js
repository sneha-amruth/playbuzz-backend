const express = require('express')
const router = express.Router()

const { createQuiz, getAllQuizes } = require("../controllers/quiz.controller")

router.post("/", createQuiz)
router.get("/", getAllQuizes)

module.exports = router