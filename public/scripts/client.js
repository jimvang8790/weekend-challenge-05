// global app
var myApp = angular.module('myApp', []);

// start ovieController (inject $http if using)
myApp.controller('MovieController', function($http){

  // variable global to this controller
  var vm = this;

  // array attached to controller (makes it aviable to the DOM);
  vm.items = [];

  vm.allMovies = function(){
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + vm.searchIn,
    }).then(function(response){
      console.log('search:', response.data.Search);
      vm.items = response.data.Search;
    });
  };// end allMovie GET

  vm.addMoives = function(){
    console.log('favorite button clicked');

    var movieToSend = {
      title: title,
      year: year,
      poster: poster
    };// end movieToSend
    console.log('movieToSend:', movieToSend);

    $http({
      method: 'POST',
      url: '/favMovie',
      data: movieToSend
    }).then(function(response){
      console.log('add movie post:', response.statusText);
    });// end $http

  };// end addMoives
});// end MovieController
