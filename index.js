const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

const userRoutes = require("./routes/user.router")
app.use("/api/user", userRoutes);

const quizRoutes = require("./routes/quiz.router")
app.use("/api/quiz", quizRoutes)

const scoreboardRoutes = require("./routes/scoreboard.router")
app.use("/api", scoreboardRoutes)

const { initializeDbConnection } = require("./db/db.connect");
initializeDbConnection();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({welcome: "to playbuzz"})
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found on server"})
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({success: false, message: "oops data not found in the server", errMessage: err.message})
})

app.listen(PORT, () => {
  console.log("Server has started and is running at PORT "+PORT);
})

