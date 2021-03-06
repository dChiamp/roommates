var User = require('../models/user');

var usersController = {
  index: function(req, res) {
    console.log("index");
    // res.render('index', { title: 'Happy Housemates' });
    User.find({}, function(err, users){
      console.log(" hey from isnide user find");
      err ? console.log(err) : res.render('user/index', {users});
    });
  },
  showUser: function(req, res) {
  	var id = req.params.id;
  	User.findById({_id: id}, function(err, user){
  	  err ? console.log(err) : res.render('user/show', {user});
  	});
  },

  createUser: function(req, res) {
  	// get data from user sign up form
  	var email = req.body.email;
  	User.create({email: email}, function(err){
  	  err ? console.log(err) : res.redirect('/');
  	});
  },

  deleteUser: function(req, res) {
  	var id = req.params.id;
  	User.remove({_id: id}, function(err, data){
  		err ? console.log(err) : res.redirect('/');
  	});
  },

	edit: function(req, res) {
		var id = req.params.id;
		User.find({_id: id, function(err, user){
			//in the future add validations for user authorization
			if (err) {
				res.status(500).send();
				console.log("Could not find the user. Error:", err);
			} else {
				res.render('users/update', {user: user});
			}
		}});

	},

	updateUser: function(req, res) {
  	var id = req.params.id;
  	User.find({_id: id, function(err, user) {
  		if (err){
  			console.log("Could not find the user. Error:", err);
  			res.status(500).send();
  		}
  		user.email = req.body.email;
  		user.username = req.body.username;
  		user.save(function(err, updatedUser){
  			if (err) {
  				console.log("Error saving user edits. Error:", err);
  				//TODO add flash message when user cannot save edits and redirect to 
  			}
  			res.json(updatedUser);
  		});
  	}});
 	},

};

module.exports = usersController;