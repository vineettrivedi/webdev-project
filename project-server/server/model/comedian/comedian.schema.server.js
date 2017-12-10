const mongoose = require('mongoose');
const ComedianSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  url: String
}, {collection: 'comedian'});

module.exports = ComedianSchema;
