const mongoose = require('mongoose');

const xpSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
  },
 

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