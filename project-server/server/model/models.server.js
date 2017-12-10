const mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/project'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds135966.mlab.com:35966/heroku_117l8ms8'; // use yours
}
const db = mongoose.connect(connectionString, { useMongoClient: true });
module.exports = db;
