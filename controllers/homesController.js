var Home = require('../models/home');

var homesController = {
	indexHomes: function(req, res){
    console.log("index");
    Home.find({}, function(err, homes){
      console.log("Found homes");
      err ? console.log(err) : res.status(200).send(JSON.stringify(homes));
    });
  }
};

module.exports = homesController;