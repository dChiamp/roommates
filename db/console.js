var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/HCA-app');
var REPL = require("repl");

var repl = REPL.start("> ");

// model requirements
repl.context.user = require("../models/user");
repl.context.house = require("../models/house");
repl.context.chore = require("../models/chore");

// listen for an `exit` event
repl.on("exit", function () {
  console.log("Ciao!");
  // disconnect the database connection
  mongoose.disconnect(function() {
    // exit the repl
    process.exit();
  });
})
