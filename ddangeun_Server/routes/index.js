var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/productList', require('./productList'));
router.use('/product', require('./getProduct'))


module.exports = router;
