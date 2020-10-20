const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  Fname: {
    type: String,
    required: true
  },
  Lname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  skill: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('user', UserSchema);