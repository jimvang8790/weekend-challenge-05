// requires
var express = require('express');
var mongoose = require('mongoose');

// schema
var MovieSchema = mongoose.Schema({
  title: String,
  poster: String,
  year: Number
});// end schema

// model
var films = mongoose.model('films', MovieSchema);

// export both schema and model
module.exports = {
  films: films,
  MovieSchema: MovieSchema
};
