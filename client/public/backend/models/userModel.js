const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: 'string',
    required: [true, 'Please add a  username']
  },
  email: {
    type: 'string',
    required: [true, 'Please add an email address']
  },
  password: {
    type: 'string',
    required: [true, 'Please add a password']
  },
},
{
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);