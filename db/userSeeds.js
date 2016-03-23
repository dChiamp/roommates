var mongoose = require('mongoose'),
    conn = mongoose.connect('mongodb://localhost/roommates'),
    User = require('../models/user.js');
    Home = require('../models/user.js');

User.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
})

Home.remove({}, function(err) {
  if (err) console.log("ERROR: ", err);
})

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

User.create(users, function(err, data){
 // err ? console.log("ERROR:", err) : console.log("created: ", data)
 if (err) {
  console.log(err)
} else {
  console.log("users created:", data)

  var homes = {name: "The Acropolis", users: users[0]._id}

  Home.create(homes, function(err, data) {
    err ? console.log(err) : console.log("homes created:", data)
  })
 mongoose.connection.close();
}
})



