var express = require('express');
var router = express.Router();

var usersController = require("../controllers/usersController");

// LANDING PG
router.route('/')
  .get(usersController.index);

// USERS

router.route('/api/users')
  .get(usersController.index)
  .post(usersController.createUser);


router.route('/api/users/:id')
  .get(usersController.showUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);

router.route('/api/users/:id/edit')
  // should be put not get?
  .get(usersController.edit);

// HOME

router.route('/api/homes')
  // index for testing
  .get(homesController.indexHomes)

route.route('api/home/:id')
  .get(homesController.showHome)
  .put(homesController.updateHome)
  .delete(homesController.deleteHome);

route.route('api/home/:id/edit')
  .get(homesController.edit)

module.exports = router;
