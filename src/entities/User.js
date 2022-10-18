const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('User', UserSchema);
