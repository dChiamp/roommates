var mongoose = require('mongoose');
// var should = require('should');
var User = require("../controllers/usersController")
var user = require('../db/userSeeds');
describe("Users", function(){  
  it("has email", function(done){    
    user.findByEmail('nick@nick.com', function(doc){      
      doc.email.should.equal('nick@nick.com');       
      done();    
    });  
  });
});