var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HomeSchema = new Schema ({
  name: String,
  users: [{ 
    type: Schema.Types.ObjectId,
    ref: 'User'
   }]
})

var Home = mongoose.model('Home', HomeSchema);
module.exports = Home;
