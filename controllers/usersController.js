var User = require('../models/user');

var usersController = {
  index: function(req, res) {
    // res.render('index', { title: 'Happy Housemates' });
    User.find({}, function(err,data){
      err ? console.log(err) : res.send({data});
    });
  },

  showUser: function(req, res) {
  	var id = req.params.id;
  	User.findById({_id: id}, function(err, data){
  	  err ? console.log(err) : res.render('show', {data});
  	});
  },

  createUser: function(req, res) {
  	// get data from user sign up form
  	var email = req.body.email;
  	User.create({data: email}, function(err){
  	  err ? console.log(err) : res.redirect('/');
  	});
  },

  deleteUser: function(req, res) {
  	var id = req.params.id
  	User.remove({_id: id}, function(err, data){
  		err ? console.log(err) : res.redirect('/')
  	})
  }
};

module.exports = usersController;