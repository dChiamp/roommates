var User = require('../models/user');

var usersController = {
  index: function(req,res){
    User.find({}, function(err, data){
      res.send(data);
    })
  }
}

module.exports = usersController;