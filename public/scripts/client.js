// global app
var myApp = angular.module('myApp', []);

// start ovieController (inject $http if using)
myApp.controller('MovieController', function($http){//NOTE inject $http here and service side
  console.log('NG up');

  // variable global to this controller
  var vm = this;
  // array attached to controller (makes it aviable to the DOM);
  vm.items = [];

  // function to add movies to db
  // function to get all movies from db

});// end MovieController

// start OmdbController
myApp.controller('OmdbController', function($http){

  // view model
  var vm = this;

  $http({
    method: 'GET',
    url: 'http://www.omdbapi.com/?s='
  }).then(function success(response){
    console.log('ombd resp:', response.data);
    vm.movieData = response.data;
  });// end then
});// end OmdbController
