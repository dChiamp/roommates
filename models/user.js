var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
  email: String,
  username: String,
  passwordDigest: String,
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
