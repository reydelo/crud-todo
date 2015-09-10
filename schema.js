var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Kitten = new Schema({
  name : String,
  color : String,
  gender : String
});

mongoose.model('kittens', Kitten);

mongoose.connect('mongodb://localhost/node-kitten')
