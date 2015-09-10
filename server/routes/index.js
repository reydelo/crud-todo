var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Kitten = mongoose.model('kittens');

router.get('/', function(req, res, next) {
  Kitten.find(function(err, kittens) {
    console.log(kittens);
    res.render(
      'index',
      { title: 'CRUD Kittens', kittens : kittens }
    );
  });
});

router.post('/', function(req, res) {
  new Kitten({
    name : req.body.name,
    color : req.body.color,
    gender : req.body.gender
  }).save(function(err, kitten) {
    console.log(kitten);
    res.render('index', {title: 'CRUD Kittens'});
  });
});

module.exports = router;
