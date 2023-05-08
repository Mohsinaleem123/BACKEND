const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  number: { type: String, required: true },
  name: { type: String, required: true },
  organisation: { type: String },
  email: { type: String, required: true },
  isngo: { type: Number, default: 0 }
});

const Users= mongoose.model('Users', UserSchema);

module.exports = Users;
