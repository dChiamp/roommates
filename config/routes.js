var express = require('express');
var router = express.Router();

var usersController = require("../controllers/usersController");
var homesController = require("../controllers/homesController");

// LANDING PG
router.route('/')
  .get(function(req, res) {
    res.render('index');
  });

// USERS

router.route('/api/users')
  .get(usersController.indexUsers)
  .post(usersController.createUser);


router.route('/api/users/:id')
  .get(usersController.showUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);

// HOME

router.route('/api/homes')
  .get(homesController.indexHomes);

// router.route('api/home/:id')
//   .get(homesController.showHome)
//   .put(homesController.updateHome)
//   .delete(homesController.deleteHome);

// router.route('api/home/:id/edit')
//   .get(homesController.updateHome);

module.exports = router;
