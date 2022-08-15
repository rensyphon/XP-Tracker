const { Schema } = require('mongoose');


// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedGames` array in User.js
const gameSchema = new Schema({
  authors: [
    {
      type: String,
    },
  ],

  description: {
    type: String,
    required: 'Please leave a description',
    minlength: 10,
    maxlength: 300,
    trim: true,
  },

  // saved game id from 

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
        require: true,
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

module.exports = gameSchema;

