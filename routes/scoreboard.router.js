const express = require("express");
const router = express.Router();

const { authVerify } = require("../middlewares/authVerify")
const { saveUserScoreboard, getUserScoreboard, getLeaderboard } = require("../controllers/scoreboard.controller");

router.post("/scoreboard", authVerify, saveUserScoreboard);
router.get("/scoreboard", authVerify, getUserScoreboard);
router.get("/leaderboard", getLeaderboard);

module.exports = router;

