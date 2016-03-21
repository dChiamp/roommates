var User = require('../models/user');

var usersController = {
  index: function(req, res) {
    res.render('index', { title: 'Happy Housemates' });
    // User.find({}, function(err,data){
      // err ? console.log(err) : res.json(users);
    // })
  }
}

module.exports = usersController;