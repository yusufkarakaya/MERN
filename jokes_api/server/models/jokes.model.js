const mongoose = require('mongoose');

const JokerSchema = new mongoose.Schema(
  {
    setup: String,
    punchline: String,
  },
  { timestamps: true }
);

const Joke = mongoose.model('Joke', JokerSchema);
module.exports = Joke;
