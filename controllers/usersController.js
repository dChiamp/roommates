var User = require('../models/user');

var usersController = {
  index: function(req, res) {
    // res.render('index', { title: 'Happy Housemates' });
    // res.send("test");
    console.log("hi derek");
    User.find({}, function(err, data){
      err ? console.log(err) : res.send({data});
    })
  }
}

module.exports = usersController;