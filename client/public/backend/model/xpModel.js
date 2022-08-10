const mongoose = require('mongoose');

const xpSchema = mongoose.Schema({
  text: {
    type: 'string',
    required: [true, 'Please add a value for this field']
  },
},
  {
    timestamps: true,
  }

);

module.exports = mongoose.model('xp', xpSchema);