var mongoose = require('mongoose'),
    conn = mongoose.connect('mongodb://localhost/roommates'),
    User = require('../models/user.js');

// User.remove({}, function(err){
//   if (err) console.log("ERROR: ", err);
// })

var users = [
  {
    email: "nick@nick.com"
  },
   {
    email: "caleb@cale.com"
  },
   {
    email: "jessie@jessie.com"
  },
   {
    email: "derek@derek.com"
  }
]

// User.create(users, function(err, data){
//  err ? console.log("ERROR:", err) : console.log("created: ", data)
//  mongoose.connection.close();
// })