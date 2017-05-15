// requires
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var movieModel = require('../models/movies');

// GET
router.get('/', function(req, res){
  console.log('get call');
  movieModel.films.find().then(function(data){
    console.log('data:', data);
    res.send(data);
  });
});// end GET

// POST
router.post('/', function(req, res){
  console.log('post call');
  console.log('req.body', req.body);
  var newMovies = movieModel.films(req.body);
  newMovies.save().then(function(){
    res.sendStatus(200);
  });
});// end post

// DELETE
router.delete('/', function(req, res){
  console.log('delete call');
  films.remove({_id: req.body.id}, function(err){
    if(err) {
      res.sendStatus(500);
    }
    else {
      res.sendStatus(200);
    }
  });
});// end delete

// exports
module.exports = router;
