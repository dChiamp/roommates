var express = require('express');
var router = express.Router();

var usersController = require("../controllers/usersController");

router.route('/')
  .get(usersController.index);

router.route('/api/users/:id/edit')
	.get(usersController.edit);

router.route('/api/users')
  .get(usersController.index)
  .post(usersController.createUser);

router.route('/api/users/:id')
  .get(usersController.showUser)
	.put(usersController.updateUser)
  .delete(usersController.deleteUser);


module.exports = router;
