const mongoose = require('mongoose');
const CriticSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  url: String
}, {collection: 'critic'});

module.exports = CriticSchema;
