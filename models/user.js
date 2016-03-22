
var User = function (){

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
  email: String
});

var _model = mongoose.model('users', UserSchema);

_model.statics.findByEmail = function(email, success, fail) {
  _model.findOne({email: email}, function(err, data){
    if (err) {
      fail(err)
    } else {
      success(data);
    }
  })
}
return {
  schema: UserSchema,
  model: _model,
  findByEmail : _findByEmail,
}

}();
