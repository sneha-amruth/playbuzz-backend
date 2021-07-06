const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: "Please enter your your firstName"
  },
  lastName: {
    type: String,
    required: "Please enter your your lastName"
  },
  email: {
    type: String,
    required: "Please enter your email id"
  },
  password: {
    type: String,
    required: "Please enter your password"
  },
 
}, { timestamps: true})

const User = mongoose.model('User', UserSchema);

module.exports = { User }