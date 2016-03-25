var User = require('../models/user');

var usersController = {

  indexUsers: function(req, res) {
    console.log("index");
    // res.render('index', { title: 'Happy Housemates' });
    User.find({}, function(err, users){
      console.log(" hey from inside user find");
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(JSON.stringify(users));
      }
    });
  },

  showUser: function(req, res) {
  	var id = req.params.id;
  	User.findById({_id: id}, function(err, user){
      if(err) {
        console.log(err);
      } else {
        res.render('user/show', {user: user});
      }
  	});
  },

  createUser: function(req, res) {
  	// get data from user sign up form
  	var email = req.body.email;
  	User.create({email: email}, function(err){
      if(err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
  	});
  },

  deleteUser: function(req, res) {
  	var id = req.params.id;
  	User.remove({_id: id}, function(err, data){
      if(err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
  	});
  },

	updateUser: function(req, res) {
  	var id = req.params.id;
  	User.find({id: _id}, function(err, user) {
  		if (err){
  			console.log("Could not find the user. Error:", err);
  			res.status(500).send();
  		}
  		user.email = req.body.email;
  		user.save(function(err, updatedUser){
  			if (err) {
  				console.log("Error saving user edits. Error:", err);
  				//TODO add flash message when user cannot save edits and redirect to 
  			}
  			res.json(updatedUser);
  		});
  	});
 	}
};

module.exports = usersController;