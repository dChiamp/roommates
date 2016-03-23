var User = require('../models/user');

var usersController = {
 	index: function(req, res) {
    res.render('index', { title: 'Happy Housemates' });
    // User.find({}, function(err,data){
      // err ? console.log(err) : res.json(users);
    // })
  },



	edit: function(req, res) {
		var id = req.params.id;
		User.find({_id: id, function(err, user){
			//in the future add validations for user authorization
			if (err) {
				res.status(500).send();
				console.log("Could not find the user. Error:", err);
			} else {
				// res.render(./pages/edit_user, {user: user[0]}); edit as needed once views are made
			}
		}});

	},

	update: function(req, res) {
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
  }
};

module.exports = usersController;