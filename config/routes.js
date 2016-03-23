var express = require('express');
var router = express.Router();

var usersController = require("../controllers/usersController")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Happy Housemates' });
// });

// router.route('/')
//   .get(usersController.index)

router.route('/api/users')
  .get(usersController.index)
  .post(usersController.createUser);

router.route('/api/users/:id')
  .get(usersController.showUser)
  .delete(usersController.deleteUser);

module.exports = router;
