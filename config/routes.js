var express = require('express');
var router = express.Router();

var usersController = require("../controllers/usersController")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Happy Housemates' });
// });

router.route('/')
  .get(usersController.index);


router.route('/api/users/:id')
	.put(usersController.update);

router.route('/api/users/:id/edit')
	.get(usersController.edit);


module.exports = router;
