const express = require("express");
const router = express.Router();

const { getAllUsers, createNewUser, loginUser } = require("../controllers/user.controller");

router.get("/", getAllUsers);
router.post("/register", createNewUser);
router.post("/login", loginUser);

module.exports = router;
