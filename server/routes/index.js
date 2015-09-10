var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRUD Kittens' });
});

router.post('/', function(req, res) {
  console.log(req.body);
  res.render('index', {title: 'CRUD Kittens'});
})

module.exports = router;
