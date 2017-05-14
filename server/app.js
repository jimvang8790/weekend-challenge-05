// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
// var db = require('./modules/database');
var movieRoutes = require('./routes/route');

// global
var port = process.env.PORT || 9000;

// uses
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(bodyParser.json());
//app.use starts at server folder
// then come this part of path and then calls movieRoutes
// which calls routes/route and ends with / in router.post
app.use('/movies', movieRoutes);
app.use('/favMovie', movieRoutes);

// base url
app.get('/', function(req, res){
  res.sendFile(path.resolve('public/views/index.html'));
});

// spin up server
app.listen(port, function(){
  console.log('server is up on:', port);
});
