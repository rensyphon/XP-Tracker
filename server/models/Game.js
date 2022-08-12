const { Schema, model } = require('mongoose');


const gameSchema = new Schema({
  description: {
    type: String,
    required: 'Please leave a description',
    minlength: 10,
    maxlength: 300,
    trim: true,
  },
  
  gameId: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    required: true,
    trim: true,
  },

  title: {
    type: String,
    required: true,
    trim: true,
  },
  review: [
    {
      reviewText: {
        type: String,
        require: ture,
        minlength: 10,
        maxlength: 300,
      },
      reviewAuthor: {
        type: String,
        required: true,
      },
    },
  ],
});
const Game = model('Game', gameSchema);

module.exports = Game;