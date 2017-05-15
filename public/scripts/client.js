// global app
var myApp = angular.module('myApp', []);

// start ovieController (inject $http if using)
myApp.controller('MovieController', function($http, MoviesInDatabase){

  // variable global to this controller
  var vm = this;

  // array attached to controller (makes it aviable to the DOM);
  // vm.display = [];

  vm.displayFav = function() {
    MoviesInDatabase.getDatabase().then(function(data){
      console.log('using dot then', data);
      vm.display = data;
    });
  };

  // dislpay movies seached from OMDB
  vm.allMovies = function(){
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + vm.searchIn,
    }).then(function(response){
      console.log('search:', response.data.Search);
      vm.items = response.data.Search;
    });
  };// end allMovie GET

  vm.addMoiveToDB = function (title, poster, year){
    console.log('favorite button clicked');
    var movieToSend = {
      title: title,
      poster: poster,
      year: year
    };// end movieToSend
    console.log('movieToSend', movieToSend);
    $http({
      method: 'POST',
      url: '/addMovie',
      data: movieToSend
    }).then(function(response){
      console.log('back from server:', response);
    });
  };// end addMoiveToDB

  vm.deleteMovie = function() {
    console.log('delete button hit');
    vm.myId = this.data('id');
    console.log('removing:', id);
    var movieToDelete = {
      id: myId
    };
    $http({
      method: 'DELETE',
      url: '/deleteMovie',
      data: movieToDelete
    }).then(function(response){
      addMoiveToDB();
    });
  };

});// end MovieController
