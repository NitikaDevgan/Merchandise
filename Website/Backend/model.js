const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let auction = new Schema({
  name: {
    type: String
  },
  emailID: {
    type: String
  },

  password:{
    type: Number
  }
});

module.exports = mongoose.model("auction", auction);