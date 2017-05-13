// requires
var express = require('express');
var mongoose = require('mongoose');

// schema
var MovieSchema = mongoose.Schema({
  title: String,
  director: String,
  release_date: Number,
  genres: String
});// end schema

// model
var movies = mongoose.model('movies', MovieSchema);

// export both schema and model
module.exports = {
  movies: movies,
  MovieSchema: MovieSchema
};
