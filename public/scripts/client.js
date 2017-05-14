// global app
var myApp = angular.module('myApp', []);

// start ovieController (inject $http if using)
myApp.controller('MovieController', function($http){

  // variable global to this controller
  var vm = this;

  // array attached to controller (makes it aviable to the DOM);
  // vm.display = [];

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

  // vm.displayFav = function(){
  //   console.log('favorite list button click');
  //   $http({
  //     method: 'GET',
  //     url: '/displayFav'
  //   }).then(function(){
  //     console.log('displayFav:', response.data);
  //     vm.display = response.data;
  //   });
  // };// end displayFav

});// end MovieController
